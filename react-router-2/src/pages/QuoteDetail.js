import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import { fetchQuote } from "../api";
import useHttp from "../hooks/use-http";
import { Fragment, useEffect } from "react";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { sendRequest, data, status, error } = useHttp(fetchQuote);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest]);

  if (status === "error") {
    return <p>No Quote</p>;
  }
  return (
    <Fragment>
      {status === "completed" ? (
        <div>
          <HighlightedQuote text={data.contents} author={data.author} />
          <Route path={`${match.path}`} exact>
            <div className="centered">
              <Link to={`${match.url}/comments`}>Load Comments</Link>
            </div>
          </Route>
          <Route path={`${match.path}/comments`}>
            <Comments />
          </Route>
        </div>
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </Fragment>
  );
};

export default QuoteDetail;
