import {useRouter} from 'next/router'

// our-domain/news/[newsId]

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId)

  return (
    <div>
      <h1>The Detail Page</h1>
    </div>
  )
}

export default DetailPage