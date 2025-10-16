import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52775931-16083de2a094930dd1fb1c03d';

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: { ...defaultParams, q: query },
  });
  return response.data;
}
