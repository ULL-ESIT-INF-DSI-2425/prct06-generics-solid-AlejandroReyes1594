import { describe, expect, test, beforeEach } from "vitest";
import { SeriesCollection } from "../src/ejercicio-1/models/seriesCollection";
import { MoviesCollection } from "../src/ejercicio-1/models/moviesCollection";
import { DocumentariesCollection } from "../src/ejercicio-1/models/documentariesCollection";
import { MediaItem } from "../src/ejercicio-1/models/mediaItem";

describe("Colecciones de contenido en streaming", () => {
  let seriesCollection: SeriesCollection;
  let moviesCollection: MoviesCollection;
  let documentariesCollection: DocumentariesCollection;

  beforeEach(() => {
    seriesCollection = new SeriesCollection([
      new MediaItem("Breaking Bad", 2008),
      new MediaItem("Dark", 2017),
    ]);

    moviesCollection = new MoviesCollection([
      new MediaItem("Inception", 2010),
      new MediaItem("Interstellar", 2014),
    ]);

    documentariesCollection = new DocumentariesCollection([
      new MediaItem("Our Planet", 2019),
      new MediaItem("Cosmos", 1980),
    ]);
  });

  test("Debe agregar un nuevo elemento a la colección de series", () => {
    seriesCollection.addItem(new MediaItem("The Witcher", 2019));
    expect(seriesCollection.getAll().length).toBe(3);
  });

  test("Debe buscar series por título", () => {
    expect(seriesCollection.searchByTitle("dark").length).toBe(1);
  });

  test("Debe buscar series por año", () => {
    expect(seriesCollection.searchByYear(2008).length).toBe(1);
  });

  test("Debe buscar películas por título", () => {
    expect(moviesCollection.searchByTitle("inception").length).toBe(1);
  });

  test("Debe buscar películas por año", () => {
    expect(moviesCollection.searchByYear(2014).length).toBe(1);
  });

  test("Debe agregar un documental a la colección", () => {
    documentariesCollection.addItem(new MediaItem("The Social Dilemma", 2020));
    expect(documentariesCollection.getAll().length).toBe(3);
  });

  test("Debe buscar documentales por título", () => {
    expect(documentariesCollection.searchByTitle("planet").length).toBe(1);
  });

  test("Debe buscar documentales por año", () => {
    expect(documentariesCollection.searchByYear(2019).length).toBe(1);
  });
});
