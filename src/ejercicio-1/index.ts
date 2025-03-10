import { SeriesCollection } from "./models/seriesCollection";
import { MoviesCollection } from "./models/moviesCollection";
import { DocumentariesCollection } from "./models/documentariesCollection";
import { MediaItem } from "./models/mediaItem";

const series = new SeriesCollection([
  new MediaItem("Breaking Bad", 2008),
  new MediaItem("Stranger Things", 2016)
]);

const movies = new MoviesCollection([
  new MediaItem("Inception", 2010),
  new MediaItem("Interstellar", 2014)
]);

const documentaries = new DocumentariesCollection([
  new MediaItem("Our Planet", 2019),
  new MediaItem("Cosmos", 1980)
]);

console.log("Series encontradas:", series.searchByTitle("breaking"));
console.log("Películas de 2014:", movies.searchByYear(2014));
console.log("Documentales encontrados:", documentaries.getAll());
