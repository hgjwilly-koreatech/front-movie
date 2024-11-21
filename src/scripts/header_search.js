import header_search_button_img_src from '../assets/header_search_img.png';
import search from '../events/search';

const header_search_input = document.createElement('input');
header_search_input.id = 'header_search_input';
header_search_input.placeholder = '검색';
header_search_input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    search(header_search_input.value, 1);
  }
});

const header_search_button_img = document.createElement('img');
header_search_button_img.id = 'header_search_button_img';
header_search_button_img.src = header_search_button_img_src;

const header_search_button = document.createElement('button');
header_search_button.id = 'header_search_button';
header_search_button.appendChild(header_search_button_img);
header_search_button.addEventListener('click', () => {
  search(header_search_input.value, 1);
});


const header_search = document.createElement('div');
header_search.id = 'header_search';
header_search.appendChild(header_search_input);
header_search.appendChild(header_search_button);

export default header_search;