import { motion } from 'framer-motion';
import { Search, Bell, Command, ChevronDown } from 'lucide-react';
import { useAdminStore } from '@/store/adminStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function TopBar() {
  const { setCommandPaletteOpen, sidebarCollapsed } = useAdminStore();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ marginLeft: sidebarCollapsed ? 72 : 256 }}
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-200"
    >
      {/* Search */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-muted-foreground w-80"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm flex-1 text-left">Search anything...</span>
        <div className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-xs font-mono bg-background rounded border border-border">
            <Command className="w-3 h-3 inline" />
          </kbd>
          <kbd className="px-1.5 py-0.5 text-xs font-mono bg-background rounded border border-border">K</kbd>
        </div>
      </button>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
        </button>

        {/* Admin Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-muted transition-colors">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Admin"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium">Alex Morgan</p>
                <p className="text-xs text-muted-foreground">Super Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass-card">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Activity Log</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  );
}
