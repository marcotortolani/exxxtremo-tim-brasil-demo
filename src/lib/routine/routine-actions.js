import shuffle from 'array-shuffle'
import { getNewData } from '@/services/api-content'
import {
  getCategoryIDByFocusArea,
  getTagsIDByTargets,
  getWeekRoutine,
} from '@/lib/routine/routine-utils'

export const fetchFullBodyData = async (tags = '', tagsExclude = '') => {
  const slugLowerBody = `/posts?per_page=${50}&categories=84&tags=${tags}&tags_exclude=${tagsExclude}`
  const slugUpperBody = `/posts?per_page=${50}&categories=83&tags=${tags}&tags_exclude=${tagsExclude}`

  let lowerBodyExercises
  let upperBodyExercises
  try {
    lowerBodyExercises = await getNewData(slugLowerBody)
    upperBodyExercises = await getNewData(slugUpperBody)
  } catch (e) {
    throw e
  }

  return [
    ...shuffle(lowerBodyExercises.data),
    ...shuffle(upperBodyExercises.data),
  ]
}

export const fetchNotFullBodyData = async (slug) => {
  let response

  try {
    response = await getNewData(slug)
  } catch (e) {
    throw e
  }

  return response.data
}

export const fetchRoutine = async (tags = '', category, tagsExclude = '') => {
  const slug = `/posts?per_page=${50}&categories=${category}&tags=${tags}&tags_exclude=${tagsExclude}`

  let routines
  try {
    if (category === 82) {
      routines = await fetchFullBodyData(tags, tagsExclude)
    } else {
      routines = await fetchNotFullBodyData(slug)
    }
  } catch (e) {
    console.log({ e })
  }

  return getWeekRoutine(routines)
}
