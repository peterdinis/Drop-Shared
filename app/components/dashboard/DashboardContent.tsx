import { FC } from 'react';
import Header from '../shared/Header';
import { useAuth } from '@/app/hooks/useAuthContent';

const DashboardContent: FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className='overflow-x-hidden ml-5 py-4 px-8 flex-grow text-center flex-1'>
      <Header text='My Dashboard' />
      <br />
      <div className='mt-5'>
        <h1 className='font-bold'>Hello: {currentUser?.email}</h1>
      </div>
    </div>
  );
};

export default DashboardContent;
