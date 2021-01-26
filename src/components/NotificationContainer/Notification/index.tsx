import React, { useEffect } from 'react';

import { Container } from './styles';

import {
  useNotification,
  NotificationMessage,
} from '../../../hooks/notification';

import { ReactComponent as DangerIcon } from '../../../assets/Icon-Danger.svg';
import { ReactComponent as CheckIcon } from '../../../assets/Icon-Check-Circle.svg';
import { ReactComponent as CloseIcon } from '../../../assets/Icon-Close.svg';

interface NotificationProps {
  notification: NotificationMessage;
  style: Record<string, unknown>;
}

const icons = {
  success: <CheckIcon className="icon-check-circle" />,
  error: <DangerIcon className="icon-danger" />,
};

const Notification: React.FC<NotificationProps> = ({ notification, style }) => {
  const { removeNotification } = useNotification();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(notification.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [notification.id, removeNotification]);

  return (
    <Container type={notification.type} style={style}>
      {icons[notification.type]}
      <div>
        <strong>{notification.title}</strong>
        <p>{notification.description}</p>
        <button
          type="button"
          onClick={() => removeNotification(notification.id)}
        >
          {notification.buttonText}
        </button>
      </div>
      <button
        type="button"
        onClick={() => removeNotification(notification.id)}
        className="close"
      >
        <CloseIcon className="icon-close" />
      </button>
    </Container>
  );
};

export default Notification;
