import { describe, expect, test } from "vitest";
import { BibliotecaMusical } from "../src/ejercicio-2/BibliotecaMusical";
import { Artista } from "../src/ejercicio-2/artista";
import { Disco } from "../src/ejercicio-2/disco";
import { Cancion } from "../src/ejercicio-2/cancion";

describe("Biblioteca Musical", () => {
  const biblioteca = new BibliotecaMusical();

  // Canciones de prueba
  const cancion1 = new Cancion("Song A", 210, ["Pop"], true, 100000);
  const cancion2 = new Cancion("Song B", 180, ["Rock"], false, 50000);

  // Disco de prueba
  const disco1 = new Disco("Album 1", 2020, [cancion1, cancion2]);

  // Artista de prueba
  const artista1 = new Artista("Artista X", 500000, [disco1]);

  biblioteca.agregarArtista(artista1);

  test("Debe agregar un artista correctamente", () => {
    expect(biblioteca.buscarArtista("Artista X")).toBeDefined();
  });

  test("Debe encontrar un disco por nombre", () => {
    expect(biblioteca.buscarDisco("Album 1")).toBeDefined();
  });

  test("Debe encontrar una canción por nombre", () => {
    expect(biblioteca.buscarCancion("Song A")).toBeDefined();
  });

  test("Debe devolver undefined si se busca un artista inexistente", () => {
    expect(biblioteca.buscarArtista("Artista Desconocido")).toBeUndefined();
  });

  test("Debe devolver undefined si se busca un disco inexistente", () => {
    expect(biblioteca.buscarDisco("Disco Desconocido")).toBeUndefined();
  });

  test("Debe devolver undefined si se busca una canción inexistente", () => {
    expect(biblioteca.buscarCancion("Canción Inexistente")).toBeUndefined();
  });

  test("Debe calcular correctamente el número de canciones en un disco", () => {
    expect(disco1.getNumeroCanciones()).toBe(2);
  });

  test("Debe calcular correctamente la duración total del disco", () => {
    expect(disco1.getDuracionTotal()).toBe(390);
  });

  test("Debe calcular correctamente el total de reproducciones de un disco", () => {
    expect(disco1.getTotalReproducciones()).toBe(150000);
  });
});
