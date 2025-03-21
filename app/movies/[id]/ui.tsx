'use client'

export default function UI({
  movie: { image_url, overview, popularity, release_date, title, vote_average },
}) {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <img src={image_url} alt={title} className='w-1/3' />
      <div className='w-full md:w-2/3 flex flex-col items-center md:items-start p-6 gap-4'>
        <h1 className='text-3xl text-bold'>{title}</h1>
        <p className='text-lg font-medium'>{overview}</p>
        <div className='font-bold text-lg'>
          <i className='fas fa-star mr-1' />
          Vote Average : {vote_average}
        </div>
        <div className='font-bold text-lg'>Popularity : {popularity}</div>
        <div className='font-bold text-lg'>Release Date : {release_date}</div>
      </div>
    </div>
  )
}
