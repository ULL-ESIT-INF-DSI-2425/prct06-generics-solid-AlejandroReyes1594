import { describe, expect, test, vi } from 'vitest';
import { Sparrow } from '../src/ejercicio-6/sparrow';
import { Penguin } from '../src/ejercicio-6/penguin';

describe("Bird classes", () => {
  test("should allow sparrow to fly", () => {
    const sparrow = new Sparrow();
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    sparrow.fly();

    expect(logSpy).toHaveBeenCalledWith("Flying...");
    
    logSpy.mockRestore();
  });

  test("should not allow penguin to fly", () => {
    const penguin = new Penguin();
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // No se llama al método fly, ya que Penguin no lo implementa
    expect(logSpy).not.toHaveBeenCalled();
    
    logSpy.mockRestore();
  });
});
