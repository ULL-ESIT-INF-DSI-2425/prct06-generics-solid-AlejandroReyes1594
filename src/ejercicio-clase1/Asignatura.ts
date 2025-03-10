/**
 * Implementacion de la clase Asignatura, la cual pueden impartir los profesores y cursar los alumnos, los alumnos tendran una nota de dicha asignatura
 * 
 */

import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

export class Asignatura {
  private profesores: Profesor[] = []; // profesores
  private estudiantes: [Estudiante, number][] = []; //estudiantes con su calificacion

    //constructor
  constructor(
    private codigo: string, //codigo de la asignatura
    private nombre: string, //nombre de la asignatura
    private titulacion: string  //titulacion de la asignatura
  ) {}


  // agrega un profesor al array
  agregarProfesor(profesor: Profesor): void {
    this.profesores.push(profesor);
  }


  // agrega un estudiante 
  agregarEstudiante(estudiante: Estudiante, calificacion: number): void {
    this.estudiantes.push([estudiante, calificacion]);
  }

  // muestra todos los profesores 
  mostrarProfesores(): string {
    return this.profesores.map((profesor) => profesor.mostrarDatos()).join("\n");
  }

  // muestra todos los estudiantes 
  mostrarEstudiantes(): string {
    return this.estudiantes
      .map(([estudiante]) => estudiante.mostrarDatos()).join("\n");
  }

  // busca profesores segun un criterio
  buscarProfesor(criterio: string): Profesor | undefined {
    return this.profesores.find((p) =>
        p.getNombre().toLowerCase() === criterio.toLowerCase() ||
        p.getCorreoInstitucional().toLowerCase() === criterio.toLowerCase()
    );
  }


  // busca estudiantes segun un criterio
  buscarEstudiante(criterio: string): Estudiante | undefined {
    return this.estudiantes
      .map(([estudiante]) => estudiante).find((e) =>
          e.getNombre().toLowerCase() === criterio.toLowerCase() ||
          e.getCorreoInstitucional().toLowerCase() === criterio.toLowerCase()
      );
  }

  // busca estudiantes por una calificacion
  obtenerPorCalificacion(calificacion: number): string {
    return this.estudiantes
      .filter(([_, nota]) => nota === calificacion)
      .map(([estudiante]) => estudiante.mostrarDatos())
      .join("\n");
  }
}