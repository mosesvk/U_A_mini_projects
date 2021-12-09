import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  console.log(params)
  console.log(match)

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <>
        <Link to={`/quotes`}>Back</Link>
        <p>No Quote Found</p>
      </>
    );
  }

  return (
    <>
      <Link to="/quotes">Back</Link>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;
