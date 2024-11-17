function removeGridContents() {
    const gridItems = document.querySelectorAll(".grid-item"); // gridItem을 모두 선택
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
}