import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface AreaChartCardProps {
  title: string;
  data: Array<{ name: string; value: number }>;
  delay?: number;
}

export function AreaChartCard({ title, data, delay = 0 }: AreaChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="h-[280px] chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(238, 84%, 67%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(188, 94%, 43%)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-lg)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#colorValue)"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
