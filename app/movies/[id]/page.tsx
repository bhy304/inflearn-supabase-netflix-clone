import UI from './ui'

export default function MovieDetail({ params }) {
  return (
    <main className='py-16 w-full absolute top-0 bottom-0 left-0 right-0 bg-blue-50 flex items-center'>
      <UI id={params.id} />
    </main>
  )
}
