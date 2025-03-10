import { NotificationService } from './notificationService';

// Clase que utiliza cualquier servicio de notificación que implemente la interfaz NotificationService
export class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
