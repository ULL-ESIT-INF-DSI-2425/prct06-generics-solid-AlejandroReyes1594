import { describe, expect, test, vi } from "vitest";
import { Printer } from "../src/ejercicio-4/Printer";
import { Scanner } from "../src/ejercicio-4/Scanner";
import { PrinterScanner } from "../src/ejercicio-4/PrinterScanner";

describe("Printer", () => {
    test("should print correctly", () => {
      const printer = new Printer();
      const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  
      printer.print();
  
      expect(logSpy).toHaveBeenCalledWith("Printing...");
  
      logSpy.mockRestore(); // Restaura la implementación original de console.log
    });
  });
  
  describe("Scanner", () => {
    test("should scan correctly", () => {
      const scanner = new Scanner();
      const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  
      scanner.scan();
  
      expect(logSpy).toHaveBeenCalledWith("Scanning...");
  
      logSpy.mockRestore(); // Restaura la implementación original de console.log
    });
  });
  
  describe("PrinterScanner", () => {
    test("should print and scan correctly", () => {
      const printerScanner = new PrinterScanner();
      const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  
      printerScanner.print();
      printerScanner.scan();
  
      expect(logSpy).toHaveBeenCalledWith("Printing...");
      expect(logSpy).toHaveBeenCalledWith("Scanning...");
  
      logSpy.mockRestore(); // Restaura la implementación original de console.log
    });
  });