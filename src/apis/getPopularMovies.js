import { options, setRecentKeyword } from './statics';

export default async function getPopularMovies(page){

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}`, options)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
  return data.results;
}

