'use client';

import { HeaderType } from '@/app/types/sharedTypes';
import { FC } from 'react';

const Header: FC<HeaderType> = ({ text }: HeaderType) => {
  return (
    <h2 className='mt-10 pb-2 text-3xl text-center font-semibold tracking-tight transition-colors'>
      {text}
    </h2>
  );
};

export default Header;
