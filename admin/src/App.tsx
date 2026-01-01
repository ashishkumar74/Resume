import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/layouts/AdminLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import ResumesPage from "./pages/ResumesPage";
import TemplatesPage from "./pages/TemplatesPage";
import AIEnginePage from "./pages/AIEnginePage";
import PaymentsPage from "./pages/PaymentsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrap page with AdminLayout
const withLayout = (Component: React.ComponentType) => (
  <AdminLayout>
    <Component />
  </AdminLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/users" element={withLayout(UsersPage)} />
            <Route path="/resumes" element={withLayout(ResumesPage)} />
            <Route path="/templates" element={withLayout(TemplatesPage)} />
            <Route path="/ai-engine" element={withLayout(AIEnginePage)} />
            <Route path="/payments" element={withLayout(PaymentsPage)} />
            <Route path="/analytics" element={withLayout(Dashboard)} />
            <Route path="/content" element={withLayout(Dashboard)} />
            <Route path="/settings" element={withLayout(SettingsPage)} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
