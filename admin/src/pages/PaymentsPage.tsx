import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { KpiCard } from '@/components/admin/KpiCard';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { chartData } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const failedPayments = [
  { id: 1, user: 'John Smith', email: 'john@example.com', amount: '$29.00', plan: 'Pro', reason: 'Card declined', date: '2024-02-18' },
  { id: 2, user: 'Emma Wilson', email: 'emma@example.com', amount: '$99.00', plan: 'Enterprise', reason: 'Insufficient funds', date: '2024-02-17' },
  { id: 3, user: 'Mike Brown', email: 'mike@example.com', amount: '$29.00', plan: 'Pro', reason: 'Expired card', date: '2024-02-16' },
];

const COLORS = ['hsl(var(--muted-foreground))', 'hsl(var(--primary))', 'hsl(var(--accent))'];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Payments & Subscriptions</h1>
          <p className="text-muted-foreground">Monitor revenue and manage subscriptions.</p>
        </div>
      </div>

      {/* Revenue KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Monthly Revenue"
          value="$89,420"
          change="+18.2% from last month"
          changeType="positive"
          icon={DollarSign}
          delay={0}
        />
        <KpiCard
          title="Active Subscriptions"
          value="4,832"
          change="+245 this month"
          changeType="positive"
          icon={Users}
          delay={0.05}
        />
        <KpiCard
          title="Avg Revenue Per User"
          value="$18.50"
          change="+$2.30 from last month"
          changeType="positive"
          icon={TrendingUp}
          delay={0.1}
        />
        <KpiCard
          title="Churn Rate"
          value="2.4%"
          change="-0.3% improvement"
          changeType="positive"
          icon={AlertCircle}
          delay={0.15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscription Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold mb-6">Subscription Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData.subscriptionDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {chartData.subscriptionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                  }}
                />
                <Legend
                  formatter={(value) => <span className="text-foreground">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {chartData.subscriptionDistribution.map((item, index) => (
              <div key={item.name} className="text-center">
                <p className="text-2xl font-mono font-semibold">{item.value}%</p>
                <p className="text-sm text-muted-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Failed Payments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Failed Payments</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            {failedPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div className="space-y-1">
                  <p className="font-medium">{payment.user}</p>
                  <p className="text-sm text-muted-foreground">{payment.email}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-mono font-medium">{payment.amount}</p>
                  <p className="text-xs text-destructive">{payment.reason}</p>
                </div>
                <Button variant="outline" size="sm">Retry</Button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Manual Plan Override */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr className="border-b border-border/50">
                <th>User</th>
                <th>Amount</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Date</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { user: 'Sarah Chen', amount: '$29.00', plan: 'Pro', status: 'active', date: '2024-02-18' },
                { user: 'Marcus Johnson', amount: '$99.00', plan: 'Enterprise', status: 'active', date: '2024-02-18' },
                { user: 'Emily Rodriguez', amount: '$0.00', plan: 'Free', status: 'active', date: '2024-02-17' },
                { user: 'David Kim', amount: '$29.00', plan: 'Pro', status: 'pending', date: '2024-02-17' },
              ].map((tx, index) => (
                <tr key={index}>
                  <td className="font-medium">{tx.user}</td>
                  <td className="font-mono">{tx.amount}</td>
                  <td><StatusBadge status={tx.plan.toLowerCase() as any} /></td>
                  <td><StatusBadge status={tx.status as any} /></td>
                  <td className="text-muted-foreground">{tx.date}</td>
                  <td className="text-right">
                    <Button variant="ghost" size="sm">Override</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
