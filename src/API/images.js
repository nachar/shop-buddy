const URL = 'https://api.unsplash.com/search/photos?';
const CLIENT_ID = '';

const generateQuery = (query, page = 1) => {
  return new URLSearchParams({
    client_id: CLIENT_ID,
    query: query,
    page,
    per_page: 1
  });
};

export const  GET_IMAGE = async (query, page) => {
  const response = await fetch(URL + generateQuery(query, page));
  const json = await response.json();
  const [results] = json?.results;
  if (!results) return undefined;

  const { urls: { thumb: image } } = results;

  return image;
};
