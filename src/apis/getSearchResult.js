
let recentKeyword = "";    

function getMoreSearchResult() {
    page += 1;
    getSearchResult(recentKeyword);

}

function getSearchResult(keyword) {

    if(!isSearch || recentKeyword !== keyword){
        page = 1;
        isSearch = true;
        recentKeyword = keyword;
        removeGridContents(); // 기존의 gridItem을 모두 삭제
    }
    showLoadMoreButton();



    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(recentKeyword)}&include_adult=false&language=ko&page=${page}`, options)
        .then(res => res.json())
        .then(data => {
            if(data.results.length === 0){
                hideLoadMoreButton();
                if(page === 1){
                    alert( "검색 결과가 없습니다.");
                    page = 0;
                }
                else if(page > 1){
                    alert("더 이상 검색 결과가 없습니다.");
                    page -= 1;
                }
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
