import getPopularMovies from '../apis/getPopularMovies.js';
import appendGridItem from '../gridSetters/appendGridItems.js';
import { setRecentKeyword } from '../apis/statics.js';

export default function popular(page){
  setRecentKeyword('');

  getPopularMovies(page)
    .then(popularMovies => {
      appendGridItem(popularMovies);
  });
}
