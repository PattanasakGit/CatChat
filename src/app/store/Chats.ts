import { create } from 'zustand'

interface ChatLoadingState {
    isChatLoading: boolean;
  setIsChatLoading: (value: boolean) => void;
}

export const catLoading = create<ChatLoadingState>(set => ({
    isChatLoading: false,
    setIsChatLoading: (value) => set({ isChatLoading: value }),
}));