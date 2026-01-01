import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, FileText, Layout, Sparkles, CreditCard, BarChart3, Settings, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdminStore } from '@/store/adminStore';
import { mockUsers, mockResumes } from '@/data/mockData';

const commands = [
  { id: 'dashboard', name: 'Dashboard', icon: BarChart3, path: '/' },
  { id: 'users', name: 'Users', icon: Users, path: '/users' },
  { id: 'resumes', name: 'Resumes', icon: FileText, path: '/resumes' },
  { id: 'templates', name: 'Templates', icon: Layout, path: '/templates' },
  { id: 'ai-engine', name: 'AI Engine', icon: Sparkles, path: '/ai-engine' },
  { id: 'payments', name: 'Payments', icon: CreditCard, path: '/payments' },
  { id: 'settings', name: 'Settings', icon: Settings, path: '/settings' },
];

export function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useAdminStore();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 3);

  const filteredResumes = mockResumes.filter(resume =>
    resume.title.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 3);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  useEffect(() => {
    if (commandPaletteOpen) {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [commandPaletteOpen]);

  const handleSelect = (path: string) => {
    navigate(path);
    setCommandPaletteOpen(false);
  };

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setCommandPaletteOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50"
          >
            <div className="glass-card border-border/50 shadow-glow overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search commands, users, resumes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground">
                  ESC
                </kbd>
              </div>
              
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {search && filteredUsers.length > 0 && (
                  <div className="p-2">
                    <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Users</p>
                    {filteredUsers.map((user) => (
                      <button
                        key={user.id}
                        onClick={() => handleSelect(`/users?id=${user.id}`)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      >
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                )}

                {search && filteredResumes.length > 0 && (
                  <div className="p-2 border-t border-border/50">
                    <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Resumes</p>
                    {filteredResumes.map((resume) => (
                      <button
                        key={resume.id}
                        onClick={() => handleSelect(`/resumes?id=${resume.id}`)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      >
                        <FileText className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{resume.title}</p>
                          <p className="text-xs text-muted-foreground">{resume.status}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-2 border-t border-border/50">
                  <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Navigation</p>
                  {filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd.path)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors ${
                        index === selectedIndex ? 'bg-muted/50' : ''
                      }`}
                    >
                      <cmd.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="flex-1 text-left">{cmd.name}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
