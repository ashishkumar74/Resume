import { cn } from '@/lib/utils';

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={cn('glass-card p-6 space-y-4', className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="h-4 w-20 skeleton-shimmer rounded" />
          <div className="h-8 w-32 skeleton-shimmer rounded" />
        </div>
        <div className="h-10 w-10 skeleton-shimmer rounded-xl" />
      </div>
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-4 border-b border-border/50">
        <div className="h-8 w-48 skeleton-shimmer rounded" />
      </div>
      <div className="divide-y divide-border/50">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4">
            <div className="h-10 w-10 skeleton-shimmer rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 skeleton-shimmer rounded" />
              <div className="h-3 w-48 skeleton-shimmer rounded" />
            </div>
            <div className="h-6 w-16 skeleton-shimmer rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="glass-card p-6">
      <div className="h-6 w-40 skeleton-shimmer rounded mb-6" />
      <div className="h-64 skeleton-shimmer rounded-xl" />
    </div>
  );
}
