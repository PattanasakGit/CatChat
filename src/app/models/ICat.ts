export interface ICat {
    id: string;
    name: string;
    summary: string;
    image: string;
  }
export interface ICatPersonality {
    id: string;
    personality: string;
  }

export  interface CatState {
    selectedCat: ICat;
    setSelectedCat: (cat: ICat) => void;
  }
  