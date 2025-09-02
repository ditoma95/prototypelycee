"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning';
  title: string;
  message: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'info',
    title: 'Inscription 2025',
    message: 'Les inscriptions pour l\'année scolaire 2025-2026 sont ouvertes.'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Examens Approchants',
    message: 'Les examens trimestriels auront lieu du 1er au 5 mars.'
  }
];

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simuler l'arrivée de notifications
    const timer = setTimeout(() => {
      setNotifications(mockNotifications);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.3 }}
            className="mb-4 bg-white border rounded-lg shadow-lg p-4 min-w-[300px] max-w-[400px]"
          >
            <div className="flex items-start space-x-3">
              {getIcon(notification.type)}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeNotification(notification.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}