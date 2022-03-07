

let movies = [];

const addMovie = (ev)=>{
  ev.preventDefault();
  let movie = {
    id: Date.now(),
    title: document.getElementById('title').value,
    year: document.getElementById('yr').value
  }
  //movies.push(movie);
  //document.forms[0].reset();

  console.warn('added', {movies});
  


  localStorage.setItem('MyMovieList', JSON.stringify(movie));
  
}
document.getElementById("output").innerHTML = localStorage.getItem('MyMovieList');
document.getElementById('btn').addEventListener('click', addMovie);