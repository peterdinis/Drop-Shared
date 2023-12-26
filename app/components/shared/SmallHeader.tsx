'use client';

import { HeaderType } from '@/app/types/sharedTypes';
import { FC } from 'react';

const SmallHeader: FC<HeaderType> = ({ text }: HeaderType) => {
  return (
    <h5 className='mt-10 pb-2 text-2xl text-center font-semibold tracking-tight transition-colors'>
      {text}
    </h5>
  );
};

export default SmallHeader;
