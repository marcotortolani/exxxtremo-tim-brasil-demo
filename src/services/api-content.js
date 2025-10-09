'use server'

import { API_CONTENT } from '@/config/config'

const REVALIDATE_CACHE = 3600 * 12

export const getNewData = async (slug) => {
  try {
    const res = await fetch(API_CONTENT + slug, {
      method: 'GET',
      // mode: 'cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: REVALIDATE_CACHE,
      },
    })

    if (!res.ok) {
      const errorDetail = await res.text()
      throw new Error(
        `API Fetch Error: Status ${res.status} - ${
          res.statusText
        }. Response: ${errorDetail.substring(0, 100)}...`,
      )
    }

    const data = await res.json()

    const totalPosts = res.headers.get('X-WP-Total') || 0
    const totalPages = res.headers.get('X-WP-TotalPages') || 0

    return {
      data,
      posts: totalPosts,
      pages: totalPages,
    }
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function searchData(slug) {
  const { data } = await getNewData(`/posts?search=${slug}`)
  return data
}
