"use client"
import { useState, useEffect } from 'react';
import { ICat } from '../models/ICat';

export const useCatStorage = (initialCat: ICat) => {
  const [selectedCat, setSelectedCat] = useState<ICat>(initialCat);

  useEffect(() => {
    const storedCat = localStorage.getItem('selectedCat');
    if (storedCat) {
      setSelectedCat(JSON.parse(storedCat));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCat', JSON.stringify(selectedCat));
  }, [selectedCat]);

  return [selectedCat, setSelectedCat] as const;
};