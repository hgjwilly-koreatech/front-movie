import header from './src/scripts/header.js'
import main from './src/scripts/main.js'
import popular from './src/events/popular.js';

document.querySelector('#app').appendChild(header);
document.querySelector('#app').appendChild(main);
popular(1);
