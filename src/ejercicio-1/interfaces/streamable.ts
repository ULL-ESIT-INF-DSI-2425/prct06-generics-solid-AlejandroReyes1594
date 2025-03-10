/**
 * Interfaz genérica que define los métodos de búsqueda y filtrado 
 * para una colección de contenido en streaming.
 */
export interface Streamable<T> {
  addItem(item: T): void;
  removeItem(item: T): void;
  searchByTitle(title: string): T[];
  searchByYear(year: number): T[];
  getAll(): T[];
}
