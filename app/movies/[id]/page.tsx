import UI from './ui'
import { getMovie } from '@/actions/movie-actions'

export default async function MovieDetail({ params: { id } }) {
  const movie = await getMovie(id)

  return (
    <main className='py-16 w-full absolute top-0 bottom-0 left-0 right-0 bg-blue-50 flex items-center'>
      {movie ? <UI movie={movie} /> : <div>Movie does not exists.</div>}
    </main>
  )
}
