const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const movie = movies.find(m => String(m.id) === String(id));

if (!movie) {
  document.body.innerHTML = '<main style="padding:80px;color:white;font-family:sans-serif"><h1>Movie not found</h1><a href="./index.html" style="color:white">Go back</a></main>';
} else {
  document.getElementById("moviePoster").src = movie.image;
  document.getElementById("moviePoster").alt = movie.title;

  document.getElementById("movieTitle").textContent = movie.title;
  document.getElementById("movieYear").textContent = movie.year;
  document.getElementById("movieDuration").textContent = movie.duration;
  document.getElementById("movieRating").textContent = movie.rating;
  document.getElementById("movieDesc").textContent = movie.description;

  document.getElementById("movieHdIcon").src = movie.hdIcon;

  document.body.classList.add(`movie-${movie.id}`);
}