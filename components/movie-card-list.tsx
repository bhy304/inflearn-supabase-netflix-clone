'use client'

import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Spinner } from '@material-tailwind/react'
import { searchMovies } from '@/actions/movie-actions'
import { searchState } from '@/utils/recoil/atoms'
import MovieCard from './movie-card'

export default function MovieCardList() {
  const search = useRecoilValue(searchState)
  const {
    data,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movie', search],
    queryFn: ({ pageParam }) =>
      searchMovies({ search, page: pageParam, pageSize: 12 }),
    getNextPageParam: (lastPage) => (lastPage.page ? lastPage.page + 1 : null),
  })

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage])

  useEffect(() => {
    console.log(inView)
  }, [inView])

  return (
    <div className='grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full'>
      {(isFetching || isFetchingNextPage) && <Spinner />}
      {
        <>
          {data?.pages
            .map((page) => page.data)
            .flat()
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          <div ref={ref}></div>
        </>
      }
    </div>
  )
}
