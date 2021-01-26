import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import Notification from './Notification';

import { NotificationMessage } from '../../hooks/notification';

interface NotificationContainerProps {
  messages: NotificationMessage[];
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({
  messages,
}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Notification key={key} style={props} notification={item} />
      ))}
    </Container>
  );
};

export default NotificationContainer;
