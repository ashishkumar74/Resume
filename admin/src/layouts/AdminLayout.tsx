import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/admin/Sidebar';
import { TopBar } from '@/components/admin/TopBar';
import { CommandPalette } from '@/components/admin/CommandPalette';
import { useAdminStore } from '@/store/adminStore';

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { sidebarCollapsed } = useAdminStore();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <CommandPalette />
      
      <div
        className="transition-all duration-200"
        style={{ marginLeft: sidebarCollapsed ? 72 : 256 }}
      >
        <TopBar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
