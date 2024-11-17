
const morePopularButton = document.querySelector("#load-more-button");
morePopularButton.addEventListener("click", () =>{
    console.log("click");

    if(isSearch){
        getSearchResult();
    }
    else{
        getPopular();
    }
});

