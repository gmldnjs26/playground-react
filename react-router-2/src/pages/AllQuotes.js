import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Min",
    text: "Learning Typescript is fun",
  },
  {
    id: "q3",
    author: "Heewon",
    text: "Learning Vue is fun",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
