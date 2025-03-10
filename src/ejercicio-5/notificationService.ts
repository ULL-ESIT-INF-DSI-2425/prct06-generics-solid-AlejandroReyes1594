// Interfaz que define el comportamiento común para los servicios de notificación
export interface NotificationService {
    notify(message: string): void;
  }
  