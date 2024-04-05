import create from 'zustand';

interface ClearDataState {
  isClearData: boolean;
  setIsClearData: (value: boolean) => void;
}

export const useClearData = create<ClearDataState>(set => ({
  isClearData: false,
  setIsClearData: (value) => set({ isClearData: value }),
}));