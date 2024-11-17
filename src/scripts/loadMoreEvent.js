
const morePopularButton = document.querySelector("#load-more-button");
morePopularButton.addEventListener("click", () =>{
    if(isSearch){
        getMoreSearchResult();
    }
    else{
        getPopular();
    }
});

