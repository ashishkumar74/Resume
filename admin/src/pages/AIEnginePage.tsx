import { motion } from 'framer-motion';
import { Sparkles, Cpu, AlertTriangle, CheckCircle, Settings, BarChart3 } from 'lucide-react';
import { KpiCard } from '@/components/admin/KpiCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const rejectedSuggestions = [
  { id: 1, type: 'Skill', suggestion: 'Added "Microsoft Office"', reason: 'Too generic', time: '2h ago' },
  { id: 2, type: 'Summary', suggestion: 'Rephrased career objective', reason: 'User reverted', time: '4h ago' },
  { id: 3, type: 'Experience', suggestion: 'Enhanced bullet point', reason: 'Factual inaccuracy', time: '6h ago' },
];

export default function AIEnginePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Engine</h1>
          <p className="text-muted-foreground">Configure and monitor AI-powered features.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Settings className="w-4 h-4" />
          Advanced Settings
        </Button>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="AI Requests Today"
          value="12,847"
          change="+23% from yesterday"
          changeType="positive"
          icon={Sparkles}
          delay={0}
        />
        <KpiCard
          title="Avg Response Time"
          value="1.2s"
          change="-0.3s improvement"
          changeType="positive"
          icon={Cpu}
          delay={0.05}
        />
        <KpiCard
          title="Accuracy Rate"
          value="94.2%"
          change="+1.2% this week"
          changeType="positive"
          icon={CheckCircle}
          delay={0.1}
        />
        <KpiCard
          title="Failed Requests"
          value="23"
          change="0.18% of total"
          changeType="neutral"
          icon={AlertTriangle}
          delay={0.15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configuration Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Configuration</h3>
          </div>

          <div className="space-y-6">
            {/* Temperature */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Creativity Level</Label>
                <span className="text-sm font-mono text-muted-foreground">0.7</span>
              </div>
              <Slider defaultValue={[70]} max={100} step={1} />
              <p className="text-xs text-muted-foreground">
                Higher values produce more creative suggestions but may reduce accuracy.
              </p>
            </div>

            {/* Usage Limits */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Daily Usage Limit (per user)</Label>
                <span className="text-sm font-mono text-muted-foreground">50 requests</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={5} />
            </div>

            {/* Feature Toggles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Skill Extraction</Label>
                  <p className="text-xs text-muted-foreground">Automatically extract skills from job descriptions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Summary Generation</Label>
                  <p className="text-xs text-muted-foreground">Generate professional summaries</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Content Optimization</Label>
                  <p className="text-xs text-muted-foreground">Enhance bullet points and descriptions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>ATS Compatibility Check</Label>
                  <p className="text-xs text-muted-foreground">Analyze resume for ATS friendliness</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rejected Suggestions Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-warning/10">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <h3 className="text-lg font-semibold">Rejected Suggestions</h3>
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {rejectedSuggestions.map((item) => (
              <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="p-2 rounded-lg bg-muted">
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted">{item.type}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <p className="text-sm truncate">{item.suggestion}</p>
                  <p className="text-xs text-muted-foreground">Reason: {item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-accent/10">
            <BarChart3 className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Performance Analytics</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-1">Skill Extraction</p>
            <p className="text-2xl font-mono font-semibold">96.4%</p>
            <p className="text-xs text-success">+2.1% accuracy</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-1">Summary Quality</p>
            <p className="text-2xl font-mono font-semibold">91.8%</p>
            <p className="text-xs text-success">+1.5% satisfaction</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-1">Content Optimization</p>
            <p className="text-2xl font-mono font-semibold">94.2%</p>
            <p className="text-xs text-success">+0.8% acceptance</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-1">ATS Score Improvement</p>
            <p className="text-2xl font-mono font-semibold">+23%</p>
            <p className="text-xs text-success">avg. increase</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
