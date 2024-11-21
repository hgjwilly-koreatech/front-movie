import { options, recentKeyword } from './statics';

export default async function getSearchResult(keyword, page){

  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(recentKeyword)}&include_adult=false&language=ko&page=${page}`, options)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
  console.log('data.results:', data.results);
  return data.results;
}

