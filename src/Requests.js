const API_KEY = "d83c973581c447c5cb3f8a41578b803d";

const requests = {
  // fetchTopAnime: `/3/movie/550?api_key=${API_KEY}`,
  fetchTopAnimeMovie: `discover/tv?api_key=${API_KEY}&language=en-US&with_keywords=210024`,
  fetchTopAnime: `discover/tv?api_key=${API_KEY}&language=en-US&with_keywords=13141`,
  fetchAnime: `discover/tv?api_key=${API_KEY}&language=en-US&with_keywords=`,
};

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_netwroks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };
export default requests;
