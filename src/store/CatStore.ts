import { create } from 'zustand';

import catData from "../../public/catData.json";
import { CatBackgroundChangeState, CatState, ICat } from "../models/ICat";

const initialCat = catData[0];
export const useCatStore = create<CatState>((set) => ({
  selectedCat: initialCat,
  setSelectedCat: (cat: ICat) =>
    set({
      selectedCat: cat,
    }),
}));

export const useCatBackgroundChange = create<CatBackgroundChangeState>((set) => ({
  backgroundIndex: 6,
  setBackgroundIndex: (index: Number) =>
    set({
      backgroundIndex: index,
    }),
}));
