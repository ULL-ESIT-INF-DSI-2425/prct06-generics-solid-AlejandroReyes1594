import { NotificationService } from './notificationService';

// Implementación concreta del servicio de notificación por SMS
export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
