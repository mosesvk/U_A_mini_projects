import {useParams} from 'react-router-dom'

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      {params.quoteId}
    </>
  )
}

export default QuoteDetail
