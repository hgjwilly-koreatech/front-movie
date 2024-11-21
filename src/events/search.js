import getSearchResult from '../apis/getSearchResult.js';
import { recentKeyword, setIsSearch, setPage, setRecentKeyword } from '../apis/statics.js';
import appendGridItem from '../gridSetters/appendGridItems.js';
import deleteGridItem from '../gridSetters/deleteGridItems.js'; 
import { grid_title, grid_load_more_button } from '../scripts/main_grid.js';


export default function search(keyword, page){
  // 검색 버튼을 눌렀을 때
    // 검색어가 없는 경우 : '', 1
    // 같은 검색어인 경우 : recentKeyword, 1
    // 다른 검색어인 겨웅 : keyword, 1
  // load more 버튼을 눌렀을 때 : recentKeyword, 2~
  console.log(page);

  if(page === 1){
    if(keyword === ''){
      alert('검색어를 입력해주세요.');
      return;
    }
    setPage(1);
    deleteGridItem();
    setRecentKeyword(keyword);
    grid_title.textContent = `'${keyword}' 검색결과`;
    setIsSearch(true);
  }

  getSearchResult(recentKeyword, page)
    .then(popularMovies => {
      appendGridItem(popularMovies, grid, grid_load_more_button);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  console.log('page:', page);
}