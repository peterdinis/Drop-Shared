'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/hooks/useAuthContent';

const NavbarLinks: FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
    {/* TODO: Na logine nechceme vidieť curretUser */}
      {currentUser === null ? (
        <>
          <li className='text-black text-xl'>
            <Link href='/login'>Login</Link>
          </li>
          <li className='text-black text-xl'>
            <Link href='/register'>Register</Link>
          </li>
        </>
      ) : (
        <Link href='/dashboard'>{currentUser?.email}</Link>
      )}
    </>
  );
};

export default NavbarLinks;
