import { Users, FileText, Layout, Sparkles, TrendingUp, DollarSign } from 'lucide-react';
import { KpiCard } from '@/components/admin/KpiCard';
import { AreaChartCard } from '@/components/admin/AreaChartCard';
import { BarChartCard } from '@/components/admin/BarChartCard';
import { ActivityFeed } from '@/components/admin/ActivityFeed';
import { kpiData, chartData, mockActivities } from '@/data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, here's what's happening today.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Total Users"
          value={kpiData.totalUsers.toLocaleString()}
          change="+12.5% from last month"
          changeType="positive"
          icon={Users}
          delay={0}
        />
        <KpiCard
          title="Total Resumes"
          value={kpiData.totalResumes.toLocaleString()}
          change="+8.2% from last month"
          changeType="positive"
          icon={FileText}
          delay={0.05}
        />
        <KpiCard
          title="Active Templates"
          value={kpiData.activeTemplates}
          change="2 new this week"
          changeType="neutral"
          icon={Layout}
          delay={0.1}
        />
        <KpiCard
          title="AI Usage"
          value={`${kpiData.aiUsagePercent}%`}
          change="+5.3% from last month"
          changeType="positive"
          icon={Sparkles}
          delay={0.15}
        />
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <KpiCard
          title="Revenue"
          value={`$${kpiData.revenue.toLocaleString()}`}
          change="+18.2% from last month"
          changeType="positive"
          icon={DollarSign}
          delay={0.2}
        />
        <KpiCard
          title="Conversion Rate"
          value={`${kpiData.conversionRate}%`}
          change="+2.1% from last month"
          changeType="positive"
          icon={TrendingUp}
          delay={0.25}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartCard
          title="Resume Creation Trend"
          data={chartData.resumeCreation}
          delay={0.3}
        />
        <BarChartCard
          title="Template Popularity"
          data={chartData.templatePopularity}
          delay={0.35}
        />
      </div>

      {/* Activity Feed */}
      <ActivityFeed activities={mockActivities} />
    </div>
  );
}
