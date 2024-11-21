import { page, setPage, isSearch, recentKeyword } from '../apis/statics.js';
import popular from '../events/popular.js';
import search from '../events/search.js';

export default function loadMore() {

  setPage(page + 1);

  if(isSearch){
    search(recentKeyword, page);
  }
  else{
    popular(page);
  }
}
