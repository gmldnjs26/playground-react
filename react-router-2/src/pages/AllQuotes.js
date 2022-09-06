import { Fragment, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
const requestFunction = async () => {
  const res = await fetch("http://localhost:7070/api/quotes");
  const result = await res.json();
  return result;
};

const AllQuotes = () => {
  const { sendRequest, data, error, status } = useHttp(requestFunction);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return (
    <Fragment>
      {status === "completed" ? (
        <QuoteList quotes={data} />
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default AllQuotes;
