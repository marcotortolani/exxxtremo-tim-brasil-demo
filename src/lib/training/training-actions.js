import { getNewData } from '@/services/api-content'

export const fetchPosts = async (category, tags, tagsExclude) => {
  const slug = `/posts?per_page=${50}&categories=${category}&tags=${tags}&tags_exclude=${tagsExclude}`
  let response
  try {
    response = await getNewData(slug)
  } catch (e) {
    throw e
  }

  return response.data
}
