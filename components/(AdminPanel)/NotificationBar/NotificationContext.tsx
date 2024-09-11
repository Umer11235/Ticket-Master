"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextType {
  isNotificationOpen: boolean;
  toggleNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  return (
    <NotificationContext.Provider value={{ isNotificationOpen, toggleNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
