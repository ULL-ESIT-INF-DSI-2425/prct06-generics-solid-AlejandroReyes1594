// src/ejercicio-2/Disco.ts
import { Cancion } from "./cancion";
export class Disco {
  constructor(
    public nombre: string,
    public anioPublicacion: number,
    public canciones: Cancion[]
  ) {}

  getNumeroCanciones(): number {
    return this.canciones.length;
  }

  getDuracionTotal(): number {
    return this.canciones.reduce((total, cancion) => total + cancion.duracion, 0);
  }

  getTotalReproducciones(): number {
    return this.canciones.reduce((total, cancion) => total + cancion.reproducciones, 0);
  }
}