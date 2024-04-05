import create from 'zustand';
import { ICat } from '../models/ICat';
import catData from "../../../public/catData.json";

const initialCat = catData[0];

interface CatState {
  selectedCat: ICat;
  setSelectedCat: (cat: ICat) => void;
}

const useCatStore = create<CatState>((set) => ({
  selectedCat: initialCat,
  setSelectedCat: (cat: ICat) => set({ selectedCat: cat }),
}));

export default useCatStore;