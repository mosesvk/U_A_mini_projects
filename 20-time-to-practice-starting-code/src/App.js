import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" component={AllQuotes} exact />
          <Route path="/quotes/:quoteId" component={QuoteDetail} />
          <Route path="/new-quotes" component={NewQuote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
