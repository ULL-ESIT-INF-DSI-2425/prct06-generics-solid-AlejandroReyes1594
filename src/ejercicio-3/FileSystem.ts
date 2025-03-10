import { FileReader } from "./FileReader";
import { FileWriter } from './FileWriter';

/**
 * Interface que combina las funcionalidades de lectura y escritura de archivos.
 */
export interface FileSystem extends FileReader, FileWriter {}