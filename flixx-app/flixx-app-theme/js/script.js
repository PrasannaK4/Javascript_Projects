const global = {
    currentPage: window.location.pathname
};

async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');
    console.log(results)
    results.forEach((movie) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
     ${movie.poster_path ?
                ` <img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    class="card-img-top"
    alt="${movie.title}"
  />`: ` <img
  src="images/no-image.jpg"
  class="card-img-top"
  alt="Movie Title"
/>`}
    </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${movie.release_date}</small>
      </p>
    </div>
    `;
    document.querySelector('#popular-movies').appendChild(div);
    });
}

//Fetch data from TMBD API
async function fetchAPIData(endPoint) {
    const API_KEY = '1b7cae8aeddff62de1e3cc5addf13bf6';
    const API_URL = 'https://api.themoviedb.org/3/';
    const res = await fetch(`${API_URL}${endPoint}?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();
    return data;
}

// Highlight active links
function highLightActiveLinks() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })
}

//init app
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('movie detals');
            break;
        case '/tv-details.html':
            console.log('tv detals');
            break;
        case '/search.html':
            console.log('search');
            break;
    }
    highLightActiveLinks();

}

document.addEventListener('DOMContentLoaded', init);