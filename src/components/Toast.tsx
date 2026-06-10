import { useEffect, useState } from 'react';
import { Clock, X } from 'lucide-react';
import { registerToastHandler, unregisterToastHandler } from '../lib/toast';

interface ToastMessage {
  id: number;
  text: string;
}

let nextId = 0;

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    registerToastHandler((text: string) => {
      const id = nextId++;
      setToasts((prev) => [...prev, { id, text }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3500);
    });
    return () => { unregisterToastHandler(); };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-navy text-white rounded-xl px-5 py-3.5 shadow-2xl shadow-black/20 border border-white/10 flex items-center gap-3 min-w-[280px] max-w-[380px] animate-toast-in"
        >
          <Clock className="w-4 h-4 text-teal-300 flex-shrink-0" />
          <span className="text-sm font-medium flex-1">{toast.text}</span>
          <button
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
