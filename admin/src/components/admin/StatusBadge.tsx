import { cn } from '@/lib/utils';

type StatusType = 'draft' | 'published' | 'exported' | 'active' | 'suspended' | 'pending' | 'free' | 'pro' | 'enterprise';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  draft: 'badge-muted',
  published: 'badge-success',
  exported: 'bg-accent/10 text-accent border border-accent/20',
  active: 'badge-success',
  suspended: 'badge-destructive',
  pending: 'badge-warning',
  free: 'badge-muted',
  pro: 'bg-primary/10 text-primary border border-primary/20',
  enterprise: 'bg-accent/10 text-accent border border-accent/20',
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
      statusStyles[status],
      className
    )}>
      {status}
    </span>
  );
}
