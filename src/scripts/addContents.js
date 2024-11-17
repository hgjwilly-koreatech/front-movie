function addContents(data){

    const movies = data.results; // 영화 데이터 list (20개)


    const grid = document.querySelector('#grid'); // gridItem을 담을 곳
    movies.forEach(movie => { // 각 영화 데이터에 대해
    const gridItem = document.createElement('div'); // content를 담을 div 요소를 생성해서
    gridItem.classList.add('grid-item'); // grid-item 클래스 속성을 추가
    //grid.appendChild(gridItem); // gridItem을 추가

    const img = document.createElement('img'); // 포스트를 content로 담은 img 요소를 생성해서
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;         
    gridItem.appendChild(img); // img 요소를 추가

    const movieTitle = document.createElement('p'); // 제목을 content로 담은 li 요소를 생성해서
    movieTitle.textContent = movie.title; 
    gridItem.appendChild(movieTitle); // movieTitle이 담긴 p 요소를 추가

    const div = document.createElement('div'); // 평점을 담을 div 생성
    const rate = document.createElement('p'); // 평점을 담을 span 생성
    rate.textContent = movie.vote_average.toFixed(1); // 평점을 span에 추가
    div.appendChild(rate); // div에 평점이 담긴 p요소 추가
    const star = document.createElement('img'); // 별 이미지를 담을 img 생성
    star.src = './src/assets/star.svg'; // 별 이미지 경로 설정
    div.appendChild(star); // div에 별 이미지 추가
    gridItem.appendChild(div); // div를 gridItem에 추가

    const loadMoreButton = document.querySelector('#load-more-button');
    grid.insertBefore(gridItem, loadMoreButton); // gridItem을 grid에 추가

    });
}
