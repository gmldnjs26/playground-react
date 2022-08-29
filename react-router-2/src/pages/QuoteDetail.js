import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>QuoteDetail</h1>
      <div>{params.quoteId}</div>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
