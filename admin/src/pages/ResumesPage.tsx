import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Eye, Download, Sparkles } from 'lucide-react';
import { mockResumes, mockUsers } from '@/data/mockData';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ResumesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredResumes = mockResumes.filter((resume) =>
    resume.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getUserById = (userId: string) => mockUsers.find((u) => u.id === userId);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Resumes</h1>
          <p className="text-muted-foreground">Browse and manage all user resumes.</p>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search resumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
          <Button
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Resume Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResumes.map((resume, index) => {
            const user = getUserById(resume.userId);
            return (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card overflow-hidden group hover-lift"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-[90%] bg-card rounded-lg shadow-lg p-4 space-y-2">
                      <div className="h-3 w-1/2 bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted rounded" />
                      <div className="h-2 w-2/3 bg-muted rounded" />
                      <div className="mt-4 h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-4/5 bg-muted rounded" />
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" className="gap-1">
                      <Eye className="w-4 h-4" />
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium truncate">{resume.title}</h3>
                      <p className="text-sm text-muted-foreground">{resume.template}</p>
                    </div>
                    <StatusBadge status={resume.status} />
                  </div>

                  {/* User */}
                  {user && (
                    <div className="flex items-center gap-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-muted-foreground">{user.name}</span>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="font-mono">{resume.aiScore}%</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Download className="w-4 h-4" />
                      <span className="font-mono">{resume.exports}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* List View */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden"
        >
          <table className="admin-table">
            <thead>
              <tr className="border-b border-border/50">
                <th>Resume</th>
                <th>User</th>
                <th>Template</th>
                <th>Status</th>
                <th>AI Score</th>
                <th>Exports</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {filteredResumes.map((resume) => {
                const user = getUserById(resume.userId);
                return (
                  <tr key={resume.id} className="cursor-pointer">
                    <td>
                      <span className="font-medium">{resume.title}</span>
                    </td>
                    <td>
                      {user && (
                        <div className="flex items-center gap-2">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm">{user.name}</span>
                        </div>
                      )}
                    </td>
                    <td className="text-muted-foreground">{resume.template}</td>
                    <td>
                      <StatusBadge status={resume.status} />
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="font-mono">{resume.aiScore}%</span>
                      </div>
                    </td>
                    <td className="font-mono">{resume.exports}</td>
                    <td className="text-sm text-muted-foreground">{resume.updatedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
}
