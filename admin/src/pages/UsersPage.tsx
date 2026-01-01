import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { mockUsers, User } from '@/data/mockData';
import { SlideOverPanel } from '@/components/admin/SlideOverPanel';
import { UserDetailPanel } from '@/components/admin/UserDetailPanel';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setPanelOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="text-muted-foreground">Manage your user base and subscriptions.</p>
        </div>
        <Button className="gap-2">
          Export Users
        </Button>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card overflow-hidden"
      >
        <table className="admin-table">
          <thead>
            <tr className="border-b border-border/50">
              <th>User</th>
              <th>Plan</th>
              <th>Resumes</th>
              <th>AI Usage</th>
              <th>Status</th>
              <th>Last Active</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleUserClick(user)}
                className="cursor-pointer"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <StatusBadge status={user.plan} />
                </td>
                <td>
                  <span className="font-mono">{user.resumeCount}</span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${user.aiUsage}%`,
                          background: 'var(--gradient-primary)',
                        }}
                      />
                    </div>
                    <span className="text-sm font-mono">{user.aiUsage}%</span>
                  </div>
                </td>
                <td>
                  <StatusBadge status={user.status} />
                </td>
                <td>
                  <span className="text-sm text-muted-foreground">{user.lastActive}</span>
                </td>
                <td className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleUserClick(user)}>
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Resumes</DropdownMenuItem>
                      <DropdownMenuItem>Upgrade Plan</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Suspend</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* User Detail Panel */}
      <SlideOverPanel
        isOpen={panelOpen}
        onClose={() => setPanelOpen(false)}
        title="User Details"
      >
        {selectedUser && <UserDetailPanel user={selectedUser} />}
      </SlideOverPanel>
    </div>
  );
}
