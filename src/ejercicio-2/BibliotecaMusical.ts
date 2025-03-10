// src/ejercicio-2/BibliotecaMusical.ts
import { Artista } from "./artista";
import { Disco } from "./disco";
import { Cancion } from "./cancion";

export class BibliotecaMusical {
  private artistas: Artista[] = [];

  agregarArtista(artista: Artista): void {
    this.artistas.push(artista);
  }

  mostrarBiblioteca(): void {
    console.table(this.artistas.map(artista => ({
      Nombre: artista.nombre,
      "Oyentes Mensuales": artista.oyentesMensuales,
      "Número de Discos": artista.discografia.length
    })));
  }

  buscarArtista(nombre: string): Artista | undefined {
    return this.artistas.find(artista => artista.nombre.toLowerCase() === nombre.toLowerCase());
  }

  buscarDisco(nombre: string): Disco | undefined {
    for (const artista of this.artistas) {
      const disco = artista.discografia.find(d => d.nombre.toLowerCase() === nombre.toLowerCase());
      if (disco) return disco;
    }
    return undefined;
  }

  buscarCancion(nombre: string): Cancion | undefined {
    for (const artista of this.artistas) {
      for (const disco of artista.discografia) {
        const cancion = disco.canciones.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (cancion) return cancion;
      }
    }
    return undefined;
  }
}
