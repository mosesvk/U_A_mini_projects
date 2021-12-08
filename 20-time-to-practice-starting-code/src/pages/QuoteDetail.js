import { useParams, Route, Link } from "react-router-dom";

import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  {id: 'q2', author: 'Maximilian', text: 'Learning React is great'}
]

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return (
      <>
        <Link to={`/quotes`}>Back</Link>
        <p>No Quote Found</p>
      </>
    )
  }

  return (
    <>
      <Link to='/quotes'>Back</Link>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quotId}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;
