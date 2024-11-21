import { getGrid } from './main_grid';

const main = document.createElement('main');
main.id = 'main';

const grid = getGrid();
main.appendChild(grid);

export default main;


