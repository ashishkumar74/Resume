import { motion } from 'framer-motion';
import { Settings, Flag, Sparkles, Download, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage application configuration and preferences.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full justify-start border-b border-border/50 rounded-none bg-transparent p-0 h-auto">
            <TabsTrigger value="general" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
              <Settings className="w-4 h-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="features" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
              <Flag className="w-4 h-4" />
              Feature Flags
            </TabsTrigger>
            <TabsTrigger value="ai" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
              <Sparkles className="w-4 h-4" />
              AI Configuration
            </TabsTrigger>
            <TabsTrigger value="export" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
              <Download className="w-4 h-4" />
              Export Settings
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">General Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="appName">Application Name</Label>
                  <Input id="appName" defaultValue="ResumeAI" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input id="supportEmail" type="email" defaultValue="support@resumeai.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </TabsContent>

          <TabsContent value="features" className="p-6 space-y-6">
            <h3 className="text-lg font-semibold">Feature Flags</h3>
            
            <div className="space-y-4">
              {[
                { id: 'ai-suggestions', label: 'AI Suggestions', description: 'Enable AI-powered content suggestions', enabled: true },
                { id: 'export-pdf', label: 'PDF Export', description: 'Allow users to export resumes as PDF', enabled: true },
                { id: 'export-docx', label: 'DOCX Export', description: 'Allow users to export resumes as Word documents', enabled: true },
                { id: 'templates-v2', label: 'Templates V2', description: 'Enable new template system (beta)', enabled: false },
                { id: 'analytics', label: 'Resume Analytics', description: 'Show detailed analytics for resumes', enabled: true },
                { id: 'ats-check', label: 'ATS Compatibility Check', description: 'Analyze resumes for ATS compatibility', enabled: true },
              ].map((flag) => (
                <div key={flag.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div>
                    <Label>{flag.label}</Label>
                    <p className="text-sm text-muted-foreground">{flag.description}</p>
                  </div>
                  <Switch defaultChecked={flag.enabled} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="p-6 space-y-6">
            <h3 className="text-lg font-semibold">AI Configuration</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aiModel">AI Model</Label>
                <Select defaultValue="gpt-4">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude">Claude 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="systemPrompt">System Prompt</Label>
                <Textarea
                  id="systemPrompt"
                  rows={4}
                  defaultValue="You are an expert resume writer and career coach. Help users create professional, ATS-friendly resumes that highlight their skills and achievements effectively."
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>Rate Limiting</Label>
                  <p className="text-sm text-muted-foreground">Enable rate limiting for AI requests</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Configuration</Button>
            </div>
          </TabsContent>

          <TabsContent value="export" className="p-6 space-y-6">
            <h3 className="text-lg font-semibold">Export Settings</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pdfQuality">PDF Quality</Label>
                <Select defaultValue="high">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (smaller file size)</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High (best quality)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>Include Watermark</Label>
                  <p className="text-sm text-muted-foreground">Add watermark on free plan exports</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>Track Downloads</Label>
                  <p className="text-sm text-muted-foreground">Log export analytics</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="p-6 space-y-6">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                </div>
                <Select defaultValue="60">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                    <SelectItem value="480">8 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>IP Whitelisting</Label>
                  <p className="text-sm text-muted-foreground">Restrict admin access to specific IPs</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div>
                  <Label>Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">Log all admin actions</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
