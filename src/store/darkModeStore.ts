import { create } from 'zustand'

interface DarkModeStore {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
  toggleDarkMode: () => void
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
})) 