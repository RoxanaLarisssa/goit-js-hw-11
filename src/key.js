import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function serviceImages(value, page = 1) {
  const KEY = '39787944-43ec837227cb503858330c56a';
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
