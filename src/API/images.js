const URL = 'https://api.unsplash.com/search/photos?';
const CLIENT_ID = '';

export const  GET_IMAGE = async (query, page = 1) => {
  const response = await fetch(URL + new URLSearchParams({
    client_id: CLIENT_ID,
    query: query,
    page,
    per_page: 1
  }));
  const json = await response.json();
  const [results] = json?.results;
  const { urls: { thumb: image } } = results;

  return image;
};
