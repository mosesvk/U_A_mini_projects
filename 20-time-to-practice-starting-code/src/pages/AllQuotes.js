
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
  {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  {id: 'q2', author: 'Maximilian', text: 'Learning React is great'}
]

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  )
}

export default AllQuotes
