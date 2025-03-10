/**
 * Fichero para realizar pequeñas pruebas del codigo sin usar test (uso test mas adelante)
 */

import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";
import { Asignatura } from "./Asignatura";

const estudiante1 = new Estudiante("Juan", "Pérez", new Date(2000, 5, 15),  4, true, "juan@ull.edu.es", false);
const estudiante2 = new Estudiante("Ana", "López", new Date(2001, 8, 22), 0, false, "ana@ull.edu.es", true);

const profesor1 = new Profesor("Carlos", "Gómez", new Date(1980, 3, 10), 6, true , "carlos@ull.edu.es", "Lunes 10-12", 5);

const asignatura = new Asignatura("DSI102", "Desarrollo de Sistemas Informaticos", "Ingeniería Informática");

asignatura.agregarProfesor(profesor1);
asignatura.agregarEstudiante(estudiante1, 8.0);
asignatura.agregarEstudiante(estudiante2, 7.5);

console.log("Profesores:");
console.log(asignatura.mostrarProfesores());

console.log("\nEstudiantes:");
console.log(asignatura.mostrarEstudiantes());

console.log("\nBuscar profesor por correo:");
console.log(asignatura.buscarProfesor("carlos@ull.edu.es")?.mostrarDatos());

console.log("\nBuscar estudiante por nombre:");
console.log(asignatura.buscarEstudiante("Juan")?.mostrarDatos());

console.log("\nEstudiantes con calificación 8.0:");
console.log(asignatura.obtenerPorCalificacion(8.0));
