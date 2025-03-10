import { NotificationService } from './notificationService';

// Implementación concreta del servicio de notificación por correo electrónico
export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
