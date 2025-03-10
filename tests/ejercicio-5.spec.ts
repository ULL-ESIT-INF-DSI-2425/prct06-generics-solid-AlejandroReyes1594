import { describe, expect, test, vi } from 'vitest';
import { EmailService } from '../src/ejercicio-5/emailService';
import { ShortMessageService } from '../src/ejercicio-5/shortMessageService';
import { Notifier } from '../src/ejercicio-5/notifier';

describe("Notifier", () => {
  test("should send email notification", () => {
    const emailService = new EmailService();
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const emailNotifier = new Notifier(emailService);
    emailNotifier.sendNotification("Hello World!");

    expect(logSpy).toHaveBeenCalledWith("Sending notification by email: Hello World!");
    
    logSpy.mockRestore();
  });

  test("should send SMS notification", () => {
    const smsService = new ShortMessageService();
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const smsNotifier = new Notifier(smsService);
    smsNotifier.sendNotification("Hello World!");

    expect(logSpy).toHaveBeenCalledWith("Sending notification by SMS: Hello World!");
    
    logSpy.mockRestore();
  });
});
