
let recentKeyword = "";    

function getMoreSearchResult() {
    getSearchResult(recentKeyword);

}
function getSearchResult(keyword) {

    if(!isSearch){
        isSearch = true;
    }
    if(recentKeyword !== keyword){
        page = 0;
        recentKeyword = keyword;
    }


    page += 1;
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(recentKeyword)}&include_adult=true&language=ko&page=${page}`, options)
        .then(res => res.json())
        .then(data => {
            if(data.results.length === 0){
                if(page === 1){
                    alert( "검색 결과가 없습니다.");
                    page = 0;
                }
                else if(page > 1){
                    alert("더 이상 검색 결과가 없습니다.");
                    page -= 1;
                }
                throw new Error('No search result');
            }
            return data;
        })
        .then(data =>
            addContents(data)
        )
        .catch(error => 
            alert('Error',error)
        );  
}
