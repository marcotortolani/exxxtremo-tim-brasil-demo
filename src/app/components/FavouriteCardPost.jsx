'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { StateContext } from '@/providers/StateProvider'
import parse from 'html-react-parser'
import ButtonLikeFav from './ui/ButtonLikeFav.jsx'

import dictionary from '@/dictionary/lang.json'

import ImageMissing from './ImageMissing.jsx'
import ButtonSeePost from './ui/ButtonSeePost.jsx'

export default function FavouriteCardPost() {
  const [favPosts, setFavPosts] = useState([])
  const { favouritePosts } = useContext(StateContext)

  console.log(favouritePosts)

  useEffect(() => {
    if (favouritePosts !== 'undefined') {
      setFavPosts(favouritePosts)
    }
  }, [favouritePosts])

  return (
    <div className=" w-screen md:max-w-screen-md lg:max-s-screen-lg xl:max-w-screen-xl px-4 h-full flex justify-center mb-4">
      {favPosts?.length >= 1 ? (
        <ul className=" w-full grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6">
          {favPosts?.map((post, index) => (
            <li key={post.id}>
              <FavouriteCard post={post} index={index} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-LightGray w-5/6 max-w-[400px] h-32 flex items-center justify-center font-normal rounded-xl">
          {dictionary['No favorites added']}
        </div>
      )}
    </div>
  )
}

export function FavouriteCard({ post, index }) {
  return (
    <div
      className={`relative w-full h-full p-4 lg:p-6 my-2 mt-0 flex flex-col justify-center gap-2 md:gap-4 lg:gap-6 rounded-xl md:rounded-xl lg:rounded-2xl ${
        index % 2 !== 0 ? ' bg-Primary ' : ' bg-Primary  '
      } `}
    >
      <div className={`relative w-full aspect-square lg:aspect-video  `}>
        {post?.featured_image ? (
          <Image
            className={` absolute w-full h-full aspect-square object-center object-cover  rounded-lg md:rounded-xl lg:rounded-2xl`}
            fill
            sizes="(max-width: 350px)"
            src={post.featured_image[0]}
            alt={`Image ${post.title}`}
          />
        ) : (
          <ImageMissing />
        )}
        <div className=" absolute bottom-0 w-full h-full pb-2 px-2 flex flex-col justify-end ">
          <h3
            className={`${
              index % 2 !== 0 ? 'text-Black' : 'text-Black'
            } font-semibold line-clamp-2 uppercase text-start text-base `}
          >
            <span
              className={`${
                index % 2 !== 0 ? 'bg-White/80' : 'bg-White/80'
              } px-1 pr-2 box-decoration-clone leading-[1.7rem]`}
            >
              {parse(post.title || '')}
            </span>
          </h3>
          <div className=" absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-Black/80 rounded-full p-2 md:px-0 lg:p-2">
            <ButtonLikeFav post={post} color={'#cbeb37'} />
          </div>
        </div>
      </div>
      <div className=" z-20 absolute2 bottom-0 w-full h-1/6 flex items-center justify-center">
        <ButtonSeePost
          text={dictionary['View content']}
          href={`/favorites/${post?.slug}`}
          style={index % 2 !== 0 ? 'outlineViolet' : 'outlineViolet'}
          size="xs"
        />
      </div>
    </div>
  )
}
