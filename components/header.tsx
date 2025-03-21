'use client'

import { searchState } from '@/utils/recoil/atoms'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilState } from 'recoil'

export default function Header() {
  const [search, setSearch] = useRecoilState(searchState)

  return (
    <header className='fixed top-0 left-0 right-0 px-4 py-2 bg-gray-900 flex items-center justify-between z-10'>
      <nav className='flex gap-4'>
        <Link href='/'>
          <Image
            src='/images/tmdbflix_logo.png'
            alt='TMDBFLIX Logo'
            width={50}
            height={50}
            className='!w-20 !h-auto'
          />
        </Link>
        <ul className='flex gap-2 text-white'>
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className='flex items-center gap-2 w-full max-w-72 border border-white bg-transparent text-white rounded-md p-2'>
        <i className='fas fa-search' />
        <input
          type='text'
          className='bg-transparent w-full outline-none'
          placeholder='Search Movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  )
}
