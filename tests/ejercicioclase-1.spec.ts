/**
 * Fichero test para probar las funcionalidades del codigo
 */

import { describe, expect, test } from 'vitest';
import { CustomList } from '../src/ejercicio-clase1/custom_list';

describe("CustomList", () => {
  test("append debe añadir elementos de una lista a otra", () => {
    const list1 = new CustomList<number>([1, 2, 3]);
    const list2 = new CustomList<number>([4, 5]);
    list1.append(list2);
    expect(list1.toArray()).toEqual([1, 2, 3, 4, 5]);
  });

  test("concatenate debe combinar varias listas", () => {
    const list1 = new CustomList<number>([1, 2]);
    const list2 = new CustomList<number>([3, 4]);
    const list3 = new CustomList<number>([5, 6]);
    const result = CustomList.concatenate(list1, list2, list3);
    expect(result.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("filter debe retornar elementos que cumplan el predicado", () => {
    const list = new CustomList<number>([1, 2, 3, 4, 5]);
    expect(list.filter(n => n > 2).toArray()).toEqual([3, 4, 5]);
  });

  test("length debe retornar el número de elementos", () => {
    const list = new CustomList<number>([1, 2, 3]);
    expect(list.length()).toBe(3);
  });

  test("map debe aplicar una función a cada elemento", () => {
    const list = new CustomList<number>([1, 2, 3]);
    expect(list.map(n => n * 2).toArray()).toEqual([2, 4, 6]);
  });
  
  test(" ")
})