export default function deleteGridItems(){
    const gridItems = document.querySelectorAll('.grid_item');
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
}


