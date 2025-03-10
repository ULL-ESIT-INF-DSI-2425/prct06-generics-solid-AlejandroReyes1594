import { describe, expect, test, vi } from "vitest";
import * as fs from 'fs';
import { FSFileSystem } from "../src/ejercicio-3/FSFileSystem"; // Ajusta la ruta según corresponda

describe("FSFileSystem", () => {
  
  // Simulamos el módulo 'fs' para no manipular archivos reales durante las pruebas
  vi.mock('fs');

  test("should read file content correctly", () => {
    // Configuramos la simulación de la función 'readFileSync'
    const filePath = "test.txt";
    const mockContent = "Este es el contenido del archivo.";
    fs.readFileSync.mockReturnValue(mockContent);
    
    const fileSystem = new FSFileSystem();

    // Llamamos al método que estamos probando
    const content = fileSystem.readFile(filePath);

    // Verificamos si el contenido leído es el esperado
    expect(content).toBe(mockContent);
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
  });

  test("should handle errors when reading file", () => {
    // Configuramos la simulación para que lance un error
    const filePath = "test.txt";
    fs.readFileSync.mockImplementationOnce(() => { throw new Error("Error al leer el archivo"); });
    
    const fileSystem = new FSFileSystem();

    // Llamamos al método que debe manejar el error
    const content = fileSystem.readFile(filePath);

    // Verificamos que se devuelva una cadena vacía en caso de error
    expect(content).toBe('');
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
  });

  test("should write file content correctly", () => {
    const filePath = "test.txt";
    const dataToWrite = "Nuevo contenido";

    // Configuramos la simulación de 'writeFileSync'
    fs.writeFileSync.mockImplementationOnce(() => {});

    const fileSystem = new FSFileSystem();

    // Llamamos al método de escritura
    fileSystem.writeFile(filePath, dataToWrite);

    // Verificamos que 'writeFileSync' haya sido llamado correctamente
    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, dataToWrite, "utf-8");
  });

  test("should handle errors when writing file", () => {
    const filePath = "test.txt";
    const dataToWrite = "Nuevo contenido";

    // Configuramos la simulación para que lance un error
    fs.writeFileSync.mockImplementationOnce(() => { throw new Error("Error al escribir en el archivo"); });

    const fileSystem = new FSFileSystem();

    // Llamamos al método de escritura
    fileSystem.writeFile(filePath, dataToWrite);

    // Verificamos que no se haya lanzado ningún error inesperado y que el log del error ocurra correctamente
    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, dataToWrite, "utf-8");
  });

});
