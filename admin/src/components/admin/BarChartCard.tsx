import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface BarChartCardProps {
  title: string;
  data: Array<{ name: string; value: number }>;
  delay?: number;
}

export function BarChartCard({ title, data, delay = 0 }: BarChartCardProps) {
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
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(238, 84%, 67%)" />
                <stop offset="100%" stopColor="hsl(188, 94%, 43%)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis 
              type="category" 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12 }}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-lg)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              cursor={{ fill: 'hsl(var(--muted) / 0.3)' }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[0, 6, 6, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
