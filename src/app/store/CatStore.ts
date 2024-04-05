import create from "zustand";
import { CatState, ICat } from "../models/ICat";
import catData from "../../../public/catData.json";

const initialCat = catData[0];

export const useCatStore = create<CatState>((set) => ({
  selectedCat: initialCat,
  setSelectedCat: (cat: ICat) =>
    set({
      selectedCat: cat,
    }),
}));
