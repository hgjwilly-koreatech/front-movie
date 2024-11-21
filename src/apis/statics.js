
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI0M2FlNjhjOTU5MTIxYTYxOGRkOGQxNzg2NTIyYSIsIm5iZiI6MTczMTc5NjE2Mi40NjczNTk4LCJzdWIiOiI2NzMxZjZlYTY4OTVmMzgyMmU0NWZjNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cZrgihS25fzAjtTPJrLnQs03HUH3z8vohADUpunGwFA'
  }
};

export let recentKeyword = '';

export function setRecentKeyword(keyword) {
  recentKeyword = keyword;
}

export let page = 1;
export let isSearch = false;


export function setPage(newPage) {
  page = newPage;
}


export function setIsSearch(value){
  isSearch = value;
}