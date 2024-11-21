import loadMore from '../events/loadMore';

export const grid = document.createElement('div');
grid.id = 'grid';

export const grid_title = document.createElement('h1');
grid_title.id = 'grid_title';
grid_title.textContent = '지금 인기있는 영화';
grid.appendChild(grid_title);

export const grid_load_more_button = document.createElement('button');
grid_load_more_button.id = 'grid_load_more_button';
grid_load_more_button.textContent = '더보기';
grid_load_more_button.addEventListener('click', () => {
    loadMore();
});
grid.appendChild(grid_load_more_button);

const main = document.createElement('main');
main.id = 'main';
main.appendChild(grid);

export function getGrid(){
    return grid;
}












