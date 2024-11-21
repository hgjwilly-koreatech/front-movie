import star_svg_src from '../assets/star.svg';
import { grid, grid_load_more_button } from '../scripts/main_grid';
import { isSearch } from '../apis/statics';

export default function appendGridItem(movies){

  if(movies.length === 0){
    grid_load_more_button.style.visibility = 'hidden';
    if(isSearch) alert('검색 결과가 없습니다.');
    else alert('더 이상 결과가 없습니다.');
    return;
  }
  grid_load_more_button.style.visibility = 'visible';

  movies.forEach(movie => {
    
    let gridItem = document.createElement('div');
    gridItem.className = 'grid_item';

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    img.className = 'poster';         
    gridItem.appendChild(img);

    const movieTitle = document.createElement('p');
    movieTitle.textContent = movie.title; 
    movieTitle.className = 'movie_title';
    gridItem.appendChild(movieTitle);

    const div = document.createElement('div'); // 평점을 담을 div 생성
    div.className = 'rate_container'; // div에 rate_container 클래스 추가
      const rate = document.createElement('p');
      rate.textContent = movie.vote_average.toFixed(1);
      rate.className = 'rate';
      div.appendChild(rate); // div에 평점이 담긴 p요소 추가
      const star = document.createElement('img'); // 별 이미지를 담을 img 생성
      star.src = star_svg_src; // 별 이미지 경로 설정
      star.className = 'star'; // img에 star 클래스 추가
      div.appendChild(star); // div에 별 이미지 추가
    gridItem.appendChild(div); // div를 gridItem에 추가

    grid.insertBefore(gridItem, grid_load_more_button);
  });
  
}
    