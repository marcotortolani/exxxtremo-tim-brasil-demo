import React from 'react'
import SliderNutrition from './SliderNutrition'
import { getNewData } from '@/services/api-content'

import { CATEGORIES } from '@/lib/constants'

export default async function SectionNutrition() {
  const catName = 'nutricion'

  const { data } = await getNewData(
    `/posts?per_page=10&categories=${CATEGORIES[catName]}`,
  )

  return data?.length > 0 && <SliderNutrition posts={data} />
}
