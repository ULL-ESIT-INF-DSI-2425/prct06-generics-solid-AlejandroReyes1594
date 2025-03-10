/**
 * Interface para la lectura de archivos.
 */
export interface FileReader {
    readFile(filePath: string): string;
  }