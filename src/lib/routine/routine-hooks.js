'use client'
import { useCallback, useContext, useEffect, useState } from 'react'
import { StateContext } from '@/providers/StateProvider'
import { useRoutineStore } from '@/lib/routine/routine-stores'
import {
  getCategoryIDByFocusArea,
  getTagsIDByTargets,
  getTrainerIDToExclude,
} from '@/lib/routine/routine-utils'
import { fetchRoutine } from '@/lib/routine/routine-actions'
import { getNewData } from '@/services/api-content'

export const useNutritionPostsHook = () => {
  const [nutritionPosts, setNutritionPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const { apiCategories } = useContext(StateContext)

  const callback = useCallback(async () => {
    try {
      const categories = apiCategories
        .filter((category) => category.slug === 'nutricion')
        .map((item) => item.id)
        .join(',')

      const slug = `/posts?per_page=6&categories=${categories}`

      const response = await getNewData(slug)

      setNutritionPosts(response.data)
    } catch (error) {
      setLoading(false)
    }

    setLoading(false)
  }, [apiCategories])

  useEffect(() => {
    callback()
  }, [callback])

  return { nutritionPosts, loading }
}

export const useRoutineWeek = () => {
  const { weekRoutine, profile, updateRoutineExercises } = useRoutineStore()
  const [loading, setLoading] = useState(false)
  const { apiCategories, apiTags } = useContext(StateContext)

  const tags = getTagsIDByTargets(apiTags, profile.target)
  const tagsExclude = getTrainerIDToExclude(apiTags, profile.trainer)
  const levelSelected = profile.levels
    .find((level) => level.active)
    ?.name.toLowerCase()

  const category = getCategoryIDByFocusArea(apiCategories, profile.focusAreas)

  const callback = useCallback(async () => {
    setLoading(true)

    let tagsFetch = '',
      tagsExcludeFetch = ''

    if (levelSelected === 'principiante') {
      tagsFetch = tags
      const tagsIDExcluded = getTagsIDByTargets(apiTags, [
        { tag: 'intermedio' },
        { tag: 'avanzado' },
      ])
      tagsExcludeFetch = `${tagsExclude},${tagsIDExcluded}`
    } else if (levelSelected === 'intermedio') {
      const tagsIDIncluded = getTagsIDByTargets(apiTags, [
        { tag: 'intermedio' },
      ])
      tagsFetch = `${tagsIDIncluded},${tags}`
      const tagsIDExcluded = getTagsIDByTargets(apiTags, [{ tag: 'avanzado' }])
      tagsExcludeFetch = `${tagsExclude},${tagsIDExcluded}`
    } else if (levelSelected === 'avanzado') {
      const tagsIDIncluded = getTagsIDByTargets(apiTags, [{ tag: 'avanzado' }])
      tagsFetch = `${tagsIDIncluded},${tags}`
      const tagsIDExcluded = getTagsIDByTargets(apiTags, [
        { tag: 'intermedio' },
      ])
      tagsExcludeFetch = `${tagsExclude},${tagsIDExcluded}`
    }
    // console.log('tags to exclud efetch: ', tagsExcludeFetch)
    // console.log('tags fetch: ', tagsFetch)

    const routine = await fetchRoutine(tagsFetch, category, tagsExcludeFetch)

    updateRoutineExercises(routine)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [tags, category, tagsExclude])

  return { weekRoutine, loading, callback }
}
