import { Metadata, ResolvingMetadata } from 'next'
import UI from './ui'
import { getMovie } from '@/actions/movie-actions'

type Props = {
  params: { id: number }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const movie = await getMovie(params.id)

  return {
    title: movie?.title,
    description: movie?.overview,
    openGraph: {
      images: [movie?.image_url ?? ''],
    },
  }
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: number }
}) {
  const movie = await getMovie(id)

  return (
    <main className='py-16 w-full absolute top-0 bottom-0 left-0 right-0 bg-blue-50 flex items-center'>
      {movie ? <UI movie={movie} /> : <div>Movie does not exists.</div>}
    </main>
  )
}
