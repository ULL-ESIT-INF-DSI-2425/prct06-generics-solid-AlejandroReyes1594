/**
 * Fichero test para probar las funcionalidades del codigo
 */
import { describe, test, expect } from "vitest";
import { Estudiante } from "../src/ejercicio-clase1/Estudiante";
import { Profesor } from "../src/ejercicio-clase1/Profesor";
import { Asignatura } from "../src/ejercicio-clase1/Asignatura";

describe("Asignatura", () => {
    //creamos estudiantes y profesores
  const estudiante1 = new Estudiante("Juan", "Pérez", new Date(2000, 5, 15),  4, true, "juan@ull.edu.es", false);
  const estudiante2 = new Estudiante("Ana", "López", new Date(2001, 8, 22), 0, false, "ana@ull.edu.es", true);
  const profesor1 = new Profesor("Carlos", "Gómez", new Date(1980, 3, 10), 6, true , "carlos@ull.edu.es", "Lunes 10-12", 5);

    //creamos una asignatura
  const asignatura = new Asignatura("DSI102", "Desarrollo de Sistemas Informaticos", "Ingeniería Informática");

    //agregamos los estudiantes y profesores a la asignatura
  asignatura.agregarProfesor(profesor1);
  asignatura.agregarEstudiante(estudiante1, 8.0);
  asignatura.agregarEstudiante(estudiante2, 7.5);

    // casos de busqueda de profesor
  test("Debe buscar correctamente un profesor", () => {
    expect(asignatura.buscarProfesor("Carlos")?.mostrarDatos()).toContain("Carlos Gómez");
  });


  test("Debe devolver undefined si el profesor ne", () => {
    expect(asignatura.buscarProfesor("noexiste")).toBeUndefined();
  });
  



  // casos de busqueda de estudiante
  test("Debe buscar correctamente un estudiante", () => {
    expect(asignatura.buscarEstudiante("Juan")?.mostrarDatos()).toContain("Juan Pérez");
  });

  test("Debe buscar correctamente un estudiante", () => {
    expect(asignatura.buscarEstudiante("noexisto")).toBeUndefined();
  });  


  // casos de busqueda mediante calificacion
  test("Debe encontrar estudiantes con calificación 8.0", () => {
    expect(asignatura.obtenerPorCalificacion(8.0)).toContain("Juan Pérez");
  });

  test("Debe encontrar estudiantes con calificación 7.0 (ninguno)", () => {
    expect(asignatura.obtenerPorCalificacion(7.0)).toContain("")
  });



});
