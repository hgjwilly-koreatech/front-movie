 
function getSearchResult(keyword) {

    keyword = encodeURIComponent(keyword);
    
  fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=true&language=ko&page=1`, options)


    .then(res => res.json())
    .then(data =>
        addContents(data)
    )
    .catch(error => 
        console.error('Error:',error)
    );
}
