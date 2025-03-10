// src/ejercicio-2/Cancion.ts
export class Cancion {
    constructor(
      public nombre: string,
      public duracion: number,
      public generos: string[],
      public single: boolean,
      public reproducciones: number
    ) {}
  }