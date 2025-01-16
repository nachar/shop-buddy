export const URL = 'https://api.unsplash.com/search/photos?';
export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTQwMjJ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTczNzA2NDMwM3ww&ixlib=rb-4.0.3&q=80&w=200';
const CLIENT_ID = '';

const generateQuery = (query, page = 1) => {
  return new URLSearchParams({
    client_id: CLIENT_ID,
    query: query,
    page,
    per_page: 1
  });
};

export const GET_IMAGE = async (query, page) => {
  try {
    const response = await fetch(URL + generateQuery(query, page));
    const json = await response.json();
    const [results] = json?.results;
    if (!results) return DEFAULT_IMAGE;

    const { urls: { thumb: image } } = results;

    return image;
  } catch (e) {
    return DEFAULT_IMAGE;
  }
};
