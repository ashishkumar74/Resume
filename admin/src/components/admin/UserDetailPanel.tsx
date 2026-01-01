import { motion } from 'framer-motion';
import { Mail, Calendar, FileText, Sparkles, CreditCard, Clock, Ban, ArrowUpCircle, Eye } from 'lucide-react';
import { User } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UserDetailPanelProps {
  user: User;
}

const planColors = {
  free: 'badge-muted',
  pro: 'bg-primary/10 text-primary border border-primary/20',
  enterprise: 'bg-accent/10 text-accent border border-accent/20',
};

const statusColors = {
  active: 'badge-success',
  suspended: 'badge-destructive',
  pending: 'badge-warning',
};

export function UserDetailPanel({ user }: UserDetailPanelProps) {
  return (
    <div className="space-y-6">
      {/* User Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-2xl object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <Badge className={statusColors[user.status]}>{user.status}</Badge>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="glass-card p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <FileText className="w-4 h-4" />
            <span className="text-xs">Resumes</span>
          </div>
          <p className="stat-number text-2xl">{user.resumeCount}</p>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs">AI Usage</span>
          </div>
          <p className="stat-number text-2xl">{user.aiUsage}%</p>
        </div>
      </motion.div>

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-3 text-muted-foreground">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm">Plan</span>
          </div>
          <Badge className={planColors[user.plan]}>{user.plan}</Badge>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Last Active</span>
          </div>
          <span className="text-sm">{user.lastActive}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Joined</span>
          </div>
          <span className="text-sm">{user.joinedAt}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </div>
          <span className="text-sm">{user.email}</span>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <h4 className="text-sm font-medium text-muted-foreground">Actions</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Eye className="w-4 h-4" />
            View Resumes
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpCircle className="w-4 h-4" />
            Upgrade Plan
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-destructive hover:text-destructive">
            <Ban className="w-4 h-4" />
            Suspend
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
