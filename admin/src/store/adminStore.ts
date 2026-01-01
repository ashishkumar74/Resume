import { create } from 'zustand';

interface AdminState {
  sidebarCollapsed: boolean;
  commandPaletteOpen: boolean;
  selectedUserId: string | null;
  selectedResumeId: string | null;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleCommandPalette: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setSelectedUserId: (id: string | null) => void;
  setSelectedResumeId: (id: string | null) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  sidebarCollapsed: false,
  commandPaletteOpen: false,
  selectedUserId: null,
  selectedResumeId: null,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  toggleCommandPalette: () => set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
  setSelectedUserId: (id) => set({ selectedUserId: id }),
  setSelectedResumeId: (id) => set({ selectedResumeId: id }),
}));
