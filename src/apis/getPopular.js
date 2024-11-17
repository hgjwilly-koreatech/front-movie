const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI0M2FlNjhjOTU5MTIxYTYxOGRkOGQxNzg2NTIyYSIsIm5iZiI6MTczMTc5NjE2Mi40NjczNTk4LCJzdWIiOiI2NzMxZjZlYTY4OTVmMzgyMmU0NWZjNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cZrgihS25fzAjtTPJrLnQs03HUH3z8vohADUpunGwFA'
  }
};

let pageOfPopular = 0;

function getPopular() {
  pageOfPopular += 1;

  fetch(`https://api.themoviedb.org/3/movie/popular?language=ko&page=${pageOfPopular}`, options)
    .then(response => response.json())
    .then(data => { 
      addContents(data)
    })
    .catch(error => 
      console.error('Error:', error)
    )
}

getPopular();