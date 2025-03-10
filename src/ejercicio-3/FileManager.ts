import { FileSystem } from "./FileSystem";

/**
 * Clase que gestiona la lectura y escritura de archivos utilizando un sistema de archivos abstracto.
 */
export class FileManager {
  constructor(private fileSystem: FileSystem, private filePath: string) {}

  public readFile(): string {
    return this.fileSystem.readFile(this.filePath);
  }

  public writeFile(data: string): void {
    this.fileSystem.writeFile(this.filePath, data);
  }
}
