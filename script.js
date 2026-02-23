const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');
const postersContainerSectionTwo = document.querySelector('.section-two__posters');
const postersContainerSectionTwo2 = document.querySelector('.section-two__posters2');
const postersContainerSectionTree = document.querySelector('.section-tree__posters');
const postersContainerSectionTree2 = document.querySelector('.section-tree__posters2');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');

  document.body.style.overflow = burger.classList.contains('active') ? 'hidden' : 'auto';
});

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.classList.add('poster-card');

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="poster-card__info">
      <div class="name-date">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
      </div>
      <div class="poster__bottom">
        <div><img src="${movie.hdIcon}" alt="HD"></div>
        <div class="time-star">
          <p>${movie.duration}</p>
          <span>${movie.rating}</span>
        </div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `movie.html?id=${movie.id}`;
  });

  return card;
}

movies.forEach(movie => {
  const movieCard = createMovieCard(movie);
  postersContainerSectionTwo.append(movieCard);
});

const post2 = [
  { image: "./images/posters/Rectangle 6.png" },
  { image: "./images/posters/Rectangle 14.png" },
  { image: "./images/posters/Rectangle 15.png" },
  { image: "./images/posters/Rectangle 16.png" },
  { image: "./images/posters/Rectangle 21.png" },
  { image: "./images/posters/Rectangle 22.png" },
  { image: "./images/posters/Rectangle 23.png" },
];

const post3 = [
  { image: "./images/posters/Rectangle 52.png" },
  { image: "./images/posters/Rectangle 53.png" },
  { image: "./images/posters/Rectangle 54.png" },
  { image: "./images/posters/Rectangle 55.png" },
];

const post4 = [
  { image: "./images/posters/Rectangle 44.png" },
  { image: "./images/posters/Rectangle 45.png" },
  { image: "./images/posters/Rectangle 46.png" },
  { image: "./images/posters/Rectangle 48.png" },
  { image: "./images/posters/Rectangle 47.png" },
  { image: "./images/posters/Rectangle 50.png" },
];

function createMovieImage(images) {
  const poster = document.createElement('div');
  poster.classList.add('poster2-div');
  poster.innerHTML = `<img src="${images.image}" alt="poster">`;
  return poster;
}

post2.forEach(image => postersContainerSectionTwo2.append(createMovieImage(image)));
post3.forEach(image => postersContainerSectionTree.append(createMovieImage(image)));
post4.forEach(image => postersContainerSectionTree2.append(createMovieImage(image)));
