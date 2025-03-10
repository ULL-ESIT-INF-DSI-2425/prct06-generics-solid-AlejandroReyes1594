import { EmailService } from './emailService';
import { ShortMessageService } from './shortMessageService';
import { Notifier } from './notifier';

// Cliente que utiliza los servicios de notificación
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
