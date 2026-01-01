import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  FileText,
  Layout,
  Sparkles,
  CreditCard,
  BarChart3,
  FileEdit,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAdminStore } from '@/store/adminStore';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: FileText, label: 'Resumes', path: '/resumes' },
  { icon: Layout, label: 'Templates', path: '/templates' },
  { icon: Sparkles, label: 'AI Engine', path: '/ai-engine' },
  { icon: CreditCard, label: 'Payments', path: '/payments' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FileEdit, label: 'Content', path: '/content' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useAdminStore();
  const [hovering, setHovering] = useState(false);

  const isExpanded = !sidebarCollapsed || hovering;

  return (
    <motion.aside
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      animate={{ width: isExpanded ? 256 : 72 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-sidebar border-r border-sidebar-border"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="overflow-hidden"
            >
              <span className="font-semibold text-lg whitespace-nowrap gradient-text">ResumeAI</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200',
                    'hover:bg-sidebar-accent group relative',
                    isActive && 'bg-sidebar-accent sidebar-active'
                  )}
                >
                  <item.icon
                    className={cn(
                      'w-5 h-5 flex-shrink-0 transition-colors',
                      isActive ? 'text-primary' : 'text-sidebar-foreground/70 group-hover:text-sidebar-foreground'
                    )}
                  />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className={cn(
                          'text-sm font-medium whitespace-nowrap overflow-hidden',
                          isActive ? 'text-foreground' : 'text-sidebar-foreground/70 group-hover:text-sidebar-foreground'
                        )}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse toggle */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-full py-2 rounded-xl hover:bg-sidebar-accent transition-colors text-sidebar-foreground/70 hover:text-sidebar-foreground"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="ml-2 text-sm overflow-hidden whitespace-nowrap"
                  >
                    Collapse
                  </motion.span>
                )}
              </AnimatePresence>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
