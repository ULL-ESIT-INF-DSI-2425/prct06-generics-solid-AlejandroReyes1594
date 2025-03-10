import { Streamable } from "../interfaces/streamable";

/**
 * Clase abstracta que implementa `Streamable` y define métodos comunes
 * para todas las colecciones de contenido en streaming.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[] = [];

  constructor(items: T[] = []) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  getAll(): T[] {
    return this.items;
  }

  abstract searchByTitle(title: string): T[];
  abstract searchByYear(year: number): T[];
}
