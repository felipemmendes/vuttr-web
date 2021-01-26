import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import NotificationContainer from '../components/NotificationContainer';

export interface NotificationMessage {
  id: string;
  type: 'success' | 'error';
  title: string;
  description: string;
  buttonText: string;
}

interface NotificationContextData {
  addNotification(message: Omit<NotificationMessage, 'id'>): void;
  removeNotification(id: string): void;
}

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
);

const NotificationProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<NotificationMessage[]>([]);

  const addNotification = useCallback(
    ({
      type,
      title,
      description,
      buttonText,
    }: Omit<NotificationMessage, 'id'>) => {
      const id = uuid();

      const notification = {
        id,
        type,
        title,
        description,
        buttonText,
      };

      setMessages((oldMessages) => [...oldMessages, notification]);
    },
    [],
  );

  const removeNotification = useCallback((id: string) => {
    setMessages((oldMessages) =>
      oldMessages.filter((message) => message.id !== id),
    );
  }, []);

  return (
    <NotificationContext.Provider
      value={{ addNotification, removeNotification }}
    >
      {children}
      {messages.length ? <NotificationContainer messages={messages} /> : null}
    </NotificationContext.Provider>
  );
};

function useNotification(): NotificationContextData {
  const context = useContext(NotificationContext);

  return context;
}

export { NotificationProvider, useNotification };
