export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: 'free' | 'pro' | 'enterprise';
  resumeCount: number;
  aiUsage: number;
  lastActive: string;
  status: 'active' | 'suspended' | 'pending';
  joinedAt: string;
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  thumbnail: string;
  status: 'draft' | 'published' | 'exported';
  aiScore: number;
  createdAt: string;
  updatedAt: string;
  template: string;
  exports: number;
}

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  popularity: number;
  enabled: boolean;
  category: string;
  downloads: number;
}

export interface Activity {
  id: string;
  type: 'resume_created' | 'ai_optimization' | 'template_published' | 'user_signup' | 'export';
  userId: string;
  userName: string;
  description: string;
  timestamp: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    plan: 'pro',
    resumeCount: 12,
    aiUsage: 78,
    lastActive: '2 hours ago',
    status: 'active',
    joinedAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus.j@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    plan: 'enterprise',
    resumeCount: 45,
    aiUsage: 92,
    lastActive: '5 minutes ago',
    status: 'active',
    joinedAt: '2023-11-20',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    plan: 'free',
    resumeCount: 3,
    aiUsage: 25,
    lastActive: '1 day ago',
    status: 'active',
    joinedAt: '2024-02-01',
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    plan: 'pro',
    resumeCount: 8,
    aiUsage: 65,
    lastActive: '3 hours ago',
    status: 'pending',
    joinedAt: '2024-01-28',
  },
  {
    id: '5',
    name: 'Lisa Wang',
    email: 'lisa.wang@example.com',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    plan: 'enterprise',
    resumeCount: 67,
    aiUsage: 88,
    lastActive: '1 hour ago',
    status: 'active',
    joinedAt: '2023-09-15',
  },
];

export const mockResumes: Resume[] = [
  {
    id: '1',
    userId: '1',
    title: 'Senior Developer Resume',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop',
    status: 'published',
    aiScore: 94,
    createdAt: '2024-02-15',
    updatedAt: '2024-02-18',
    template: 'Modern Pro',
    exports: 5,
  },
  {
    id: '2',
    userId: '2',
    title: 'Product Manager CV',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop',
    status: 'draft',
    aiScore: 72,
    createdAt: '2024-02-14',
    updatedAt: '2024-02-14',
    template: 'Classic',
    exports: 0,
  },
  {
    id: '3',
    userId: '3',
    title: 'Marketing Executive',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop',
    status: 'exported',
    aiScore: 88,
    createdAt: '2024-02-10',
    updatedAt: '2024-02-16',
    template: 'Creative',
    exports: 12,
  },
  {
    id: '4',
    userId: '1',
    title: 'Technical Lead Resume',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop',
    status: 'published',
    aiScore: 91,
    createdAt: '2024-02-12',
    updatedAt: '2024-02-17',
    template: 'Modern Pro',
    exports: 3,
  },
];

export const mockTemplates: Template[] = [
  { id: '1', name: 'Modern Pro', thumbnail: '', popularity: 95, enabled: true, category: 'Professional', downloads: 12500 },
  { id: '2', name: 'Classic Executive', thumbnail: '', popularity: 88, enabled: true, category: 'Executive', downloads: 8900 },
  { id: '3', name: 'Creative Designer', thumbnail: '', popularity: 76, enabled: true, category: 'Creative', downloads: 6200 },
  { id: '4', name: 'Minimal Clean', thumbnail: '', popularity: 82, enabled: true, category: 'Minimal', downloads: 7800 },
  { id: '5', name: 'Tech Stack', thumbnail: '', popularity: 71, enabled: false, category: 'Technical', downloads: 4500 },
  { id: '6', name: 'Academic Scholar', thumbnail: '', popularity: 65, enabled: true, category: 'Academic', downloads: 3200 },
];

export const mockActivities: Activity[] = [
  { id: '1', type: 'resume_created', userId: '1', userName: 'Sarah Chen', description: 'Created "Senior Developer Resume"', timestamp: '2 minutes ago' },
  { id: '2', type: 'ai_optimization', userId: '2', userName: 'Marcus Johnson', description: 'AI optimization completed with 94% score', timestamp: '5 minutes ago' },
  { id: '3', type: 'template_published', userId: '5', userName: 'Lisa Wang', description: 'Published new template "Executive Pro"', timestamp: '12 minutes ago' },
  { id: '4', type: 'user_signup', userId: '4', userName: 'David Kim', description: 'New user registered with Pro plan', timestamp: '25 minutes ago' },
  { id: '5', type: 'export', userId: '3', userName: 'Emily Rodriguez', description: 'Exported resume to PDF', timestamp: '32 minutes ago' },
  { id: '6', type: 'ai_optimization', userId: '1', userName: 'Sarah Chen', description: 'AI suggestions applied to resume', timestamp: '45 minutes ago' },
];

export const chartData = {
  resumeCreation: [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1900 },
    { name: 'Mar', value: 2400 },
    { name: 'Apr', value: 2100 },
    { name: 'May', value: 2800 },
    { name: 'Jun', value: 3200 },
    { name: 'Jul', value: 3800 },
  ],
  templatePopularity: [
    { name: 'Modern Pro', value: 12500 },
    { name: 'Classic', value: 8900 },
    { name: 'Creative', value: 6200 },
    { name: 'Minimal', value: 7800 },
    { name: 'Tech', value: 4500 },
  ],
  subscriptionDistribution: [
    { name: 'Free', value: 45, color: 'hsl(var(--muted-foreground))' },
    { name: 'Pro', value: 38, color: 'hsl(var(--primary))' },
    { name: 'Enterprise', value: 17, color: 'hsl(var(--accent))' },
  ],
};

export const kpiData = {
  totalUsers: 24853,
  totalResumes: 156789,
  activeTemplates: 24,
  aiUsagePercent: 73,
  revenue: 89420,
  conversionRate: 12.4,
};
