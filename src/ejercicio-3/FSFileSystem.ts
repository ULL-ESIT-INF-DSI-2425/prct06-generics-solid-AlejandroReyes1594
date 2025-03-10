import * as fs from 'fs';
import { FileSystem } from './FileSystem';

/**
 * Implementación concreta de FileSystem que utiliza el módulo fs de Node.js.
 */
export class FSFileSystem implements FileSystem {
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return '';
    }
  }

  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
}
