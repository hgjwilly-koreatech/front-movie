headerImg.addEventListener("click", () => {
    homeEvent();
});

function homeEvent(){
    removeGridContents();
    title.textContent = "지금 인기있는 영화";
    
    isSearch = false;
    page = 0;
    getPopular();
}
