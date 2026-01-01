import { motion } from 'framer-motion';
import { Download, Eye, Copy, ToggleLeft, ToggleRight, TrendingUp } from 'lucide-react';
import { mockTemplates } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Templates</h1>
          <p className="text-muted-foreground">Manage resume templates and their availability.</p>
        </div>
        <Button className="gap-2">
          Create Template
        </Button>
      </div>

      {/* Template Grid (Masonry-style) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {mockTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card overflow-hidden group break-inside-avoid hover-lift"
          >
            {/* Preview */}
            <div 
              className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden"
              style={{ minHeight: index % 3 === 0 ? '300px' : index % 2 === 0 ? '250px' : '280px' }}
            >
              <div className="absolute inset-4 bg-card rounded-lg shadow-lg p-4 space-y-2">
                <div className="h-4 w-1/2 bg-muted rounded" />
                <div className="h-2 w-3/4 bg-muted rounded" />
                <div className="h-2 w-2/3 bg-muted rounded" />
                <div className="mt-6 space-y-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 w-full bg-muted rounded" />
                  ))}
                </div>
              </div>

              {/* Popularity badge */}
              {template.popularity >= 80 && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90 text-primary-foreground gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Popular
                  </Badge>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary" className="gap-1">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.category}</p>
                </div>
                <Badge variant={template.enabled ? 'default' : 'secondary'}>
                  {template.enabled ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span className="font-mono">{template.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${template.popularity}%`,
                        background: 'var(--gradient-primary)',
                      }}
                    />
                  </div>
                  <span className="font-mono">{template.popularity}%</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  {template.enabled ? (
                    <>
                      <ToggleRight className="w-4 h-4" />
                      Disable
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="w-4 h-4" />
                      Enable
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="w-4 h-4" />
                  Duplicate
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
