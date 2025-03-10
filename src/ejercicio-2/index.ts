// src/ejercicio-2/index.ts
import { BibliotecaMusical } from "./BibliotecaMusical";
import { Artista } from "./artista";
import { Disco } from "./disco";
import { Cancion } from "./cancion";

const biblioteca = new BibliotecaMusical();

const cancion1 = new Cancion("Song A", 210, ["Pop"], true, 100000);
const cancion2 = new Cancion("Song B", 180, ["Rock"], false, 50000);
const cancion3 = new Cancion("Song C", 240, ["Jazz"], true, 75000);
const cancion4 = new Cancion("Song D", 200, ["Blues"], false, 30000);
const cancion5 = new Cancion("Song E", 150, ["Hip-Hop"], true, 120000);
const cancion6 = new Cancion("Song F", 230, ["Metal"], false, 90000);

const disco1 = new Disco("Album 1", 2020, [cancion1, cancion2]);
const disco2 = new Disco("Album 2", 2018, [cancion3, cancion4]);
const disco3 = new Disco("Album 3", 2022, [cancion5, cancion6]);

const artista1 = new Artista("Artista X", 500000, [disco1]);
const artista2 = new Artista("Artista Y", 750000, [disco2]);
const artista3 = new Artista("Artista Z", 600000, [disco3]);

biblioteca.agregarArtista(artista1);
biblioteca.agregarArtista(artista2);
biblioteca.agregarArtista(artista3);

biblioteca.mostrarBiblioteca();
