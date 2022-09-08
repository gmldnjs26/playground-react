export const fetchAllQuotes = async () => {
  const res = await fetch("http://localhost:7070/api/quotes");
  const result = await res.json();
  return result;
};
export const fetchQuote = async (quoteId) => {
  const res = await fetch(`http://localhost:7070/api/quotes/${quoteId}`);
  const result = await res.json();
  return result;
};
export const fetchComments = async (quoteId) => {
  const res = await fetch(`http://localhost:7070/api/comments/${quoteId}`);
  const result = await res.json();
  return result;
};

export const createComment = async (data) => {
  const res = await fetch("http://localhost:7070/api/comments", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};
