'use client';

import { FC } from 'react';
import Link from 'next/link';
import mainImage from '../../public/img/main.jpg';
import Image from 'next/image';
import Container from './shared/Container';
import { Button } from '@/components/ui/button';

const Hero: FC = () => {
  return (
    <Container className='flex flex-wrap'>
      <div className='flex items-center w-full lg:w-1/2'>
        <div className='max-W-2xl mb-8'>
          <h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight'>
            Drop & Shared
          </h1>
          <p className='py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl'>
            Drop & Shared is a cutting-edge file-sharing application designed to
            simplify and streamline the way you share and upload files with
            colleagues, friends, and collaborators. With Drop & Shared, you can
            effortlessly exchange files of any size and type, ensuring seamless
            communication and collaboration across all your devices.
          </p>
          <div className='flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
            <Button size={'lg'}>
              <Link href='/login'>Login and try</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full lg:w-1/2'>
        <Image
          src={mainImage}
          width='616'
          height='617'
          className={'object-cover'}
          alt='Hero Illustration'
          loading='eager'
          placeholder='blur'
        />
      </div>
    </Container>
  );
};

export default Hero;
