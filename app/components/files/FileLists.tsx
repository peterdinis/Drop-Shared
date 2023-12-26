'use client';

import { FC, useEffect, useState } from 'react';
import Header from '../shared/Header';
import Sidebar from '../shared/Sidebar';
import ScrollToTop from 'react-scroll-to-top';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/app/lib/firebaseConfig';
import { useAuth } from '@/app/hooks/useAuthContent';
import FileCard from './FileCard';

const FileLists: FC = () => {
  const uploadedFilesRef = ref(storage, `uploaded-images/`);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    listAll(uploadedFilesRef).then((response) => {
      response.items.forEach((item: any) => {
        // Get metadata for each file to access its properties
        item.getMetadata().then((metadata: any) => {
          // Check if the file belongs to the current user based on their email
          if (currentUser && metadata && metadata.customMetadata?.uploader === currentUser.email) {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          }
        });
      });
    });
  }, [currentUser]); 

  return (
    <div className='flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light'>
      <Sidebar />
      <div className='ml-5 py-4 px-8 flex-growtext-center flex-1'>
        <Header text='My uploaded files' />
        <section className='mt-4 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {imageUrls && imageUrls.map((item: string) => {
          return (
            <>
              <FileCard item={item} />
            </>
          )
         })}
        </section>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default FileLists;
