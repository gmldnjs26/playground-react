import { Fragment, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { fetchAllQuotes } from "../api";

const AllQuotes = () => {
  const { sendRequest, data, status } = useHttp(fetchAllQuotes);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return (
    <Fragment>
      {status === "completed" ? (
        <QuoteList quotes={data} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </Fragment>
  );
};

export default AllQuotes;
