import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return <div>QuoteDetail {params.quoteId}</div>;
};

export default QuoteDetail;
