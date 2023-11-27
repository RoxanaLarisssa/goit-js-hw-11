import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function serviceImages(value, page = 1) {
  const KEY = '40924862-56f4c70484d80a98ef4c30bbb';
  try {
    const resp = await axios.get('', {
      params: {
        key: KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 40,
      },
    });
    const response = resp.data;
    return response;
  } catch (error) {
    console.log(error);
  }
}
