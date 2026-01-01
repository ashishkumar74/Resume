import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface SlideOverPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function SlideOverPanel({ isOpen, onClose, title, children }: SlideOverPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-lg z-50 glass-card border-l border-border/50 shadow-glow"
          >
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar h-[calc(100vh-80px)]">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
