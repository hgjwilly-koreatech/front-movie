import header_logo from './header_logo.js';
import header_search from './header_search.js';

const header = document.createElement('header');
header.id = 'header';
header.appendChild(header_logo);
header.appendChild(header_search);

export default header;
