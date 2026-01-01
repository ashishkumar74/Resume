import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  delay?: number;
}

export function KpiCard({ title, value, change, changeType = 'neutral', icon: Icon, delay = 0 }: KpiCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass-card p-6 hover-lift group"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="stat-number">{value}</p>
          {change && (
            <p className={cn(
              'text-sm font-medium',
              changeType === 'positive' && 'text-success',
              changeType === 'negative' && 'text-destructive',
              changeType === 'neutral' && 'text-muted-foreground'
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
    </motion.div>
  );
}
