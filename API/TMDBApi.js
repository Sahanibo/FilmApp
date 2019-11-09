const API_TOKEN = "6edee499500ad835f84b0afce3578c10";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    
  }

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}