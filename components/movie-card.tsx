'use client'

import Link from 'next/link'

export default function MovieCard({ movie: { id, title, image_url } }) {
  return (
    <div className='relative col-span-1'>
      <img src={image_url} alt={title} className='w-full' />
      <Link href={`/movies/${id}`}>
        <div className='absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 z-10 bg-black  opacity-0 hover:opacity-80 transition-opacity duration-300'>
          <p className='text-xl text-white text-center'>{title}</p>
        </div>
      </Link>
    </div>
  )
}
