import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (data) => {
    console.log(data.author, data.text);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
