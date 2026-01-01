import { motion } from 'framer-motion';
import { FileText, Sparkles, Layout, UserPlus, Download } from 'lucide-react';
import { Activity } from '@/data/mockData';

interface ActivityFeedProps {
  activities: Activity[];
}

const activityIcons = {
  resume_created: FileText,
  ai_optimization: Sparkles,
  template_published: Layout,
  user_signup: UserPlus,
  export: Download,
};

const activityColors = {
  resume_created: 'bg-primary/10 text-primary',
  ai_optimization: 'bg-accent/10 text-accent',
  template_published: 'bg-success/10 text-success',
  user_signup: 'bg-warning/10 text-warning',
  export: 'bg-muted text-muted-foreground',
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Live Activity</h3>
        <div className="activity-pulse">
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      
      <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
        {activities.map((activity, index) => {
          const Icon = activityIcons[activity.type];
          const colorClass = activityColors[activity.type];
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{activity.userName}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.timestamp}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
