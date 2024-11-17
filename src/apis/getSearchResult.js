
let pageOfSearch = 0;
let recentEncodedKeyword = "";
let isSearch = false;

function getSearchResult(){
    getSearchResult(recentEncodedKeyword);
}

function getSearchResult(keyword) {
    isSearch = true;

    pageOfSearch += 1;
    keyword = encodeURIComponent(keyword);

    if (keyword !== recentEncodedKeyword) {
        pageOfSearch = 1;
        recentEncodedKeyword = keyword;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?query=${recentEncodedKeyword}&include_adult=true&language=ko&page=${pageOfSearch}`, options)
        .then(res => res.json())
        .then(data =>
            addContents(data)
        )
        .catch(error => 
            console.error('Error:',error)
        );  
}
