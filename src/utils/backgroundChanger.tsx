'use client';

import { useCatBackgroundChange } from '@/store/CatStore';
import React, { useState } from 'react';

const backgrounds = [
  '/img/BG/BG-01.jpg',
  '/img/BG/BG-02.jpg',
  '/img/BG/BG-03.jpg',
  '/img/BG/BG-04.jpg',
  '/img/BG/BG-05.jpg',
  '/img/BG/BG-06.jpg',
  '/img/BG/BG-07.jpg',
  '/img/BG/BG-08.jpg',
  '/img/BG/BG-09.jpg',
  '/img/BG/BG-10.jpg',
  '/img/BG/BG-11.jpg',
  '/img/BG/BG-12.jpg',
  '/img/BG/BG-13.jpg',
  '/img/BG/BG-14.jpg',
];

const BackgroundChanger: React.FC = () => {
  const {backgroundIndex, setBackgroundIndex} = useCatBackgroundChange();

  const changeBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundIndex(randomIndex);
  };

  // สร้างภาพสุ่มเมื่อโหลดหน้าเว็บหรือคลิกที่ส่วนของหน้าต่าง
  useState(() => {
    changeBackground();
  });

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ background: `url(${backgrounds[backgroundIndex as any]}) center center / cover fixed no-repeat` }}
      onClick={changeBackground}
    ></div>
  );
};

export default BackgroundChanger;

