
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", () =>{
    searchEvent();
});


function searchEvent(){

    let keyword = document.querySelector("#search-input").value;
    if(keyword == ''){ // 검색어가 없을 경우{
        alert("검색어를 입력해주세요.");
    }
    else{
        removeGridContents(); // 기존의 gridItem을 모두 삭제
        const title = document.querySelector("#grid-title");
        title.textContent = `'${keyword}' 검색 결과`; // 검색 결과 제목 변경
        getSearchResult(keyword); // 검색 결과를 가져옴
    }
}