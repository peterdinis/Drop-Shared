'use client';

import { Button } from '@/components/ui/button';
import { FC, useState, ChangeEvent } from 'react';
import { storage } from '@/app/lib/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Upload } from 'lucide-react';
import FileDisplayPreview from './FIleDisplayPreview';
import { v4 } from 'uuid';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuthContent';
import Compress from 'compress.js';

const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [, setImageUrls] = useState<string[]>([]);
  const router = useRouter();
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const handleUploadFile = () => {
    if (file === null) {
      toast({
        title: 'No file found',
        description: 'First you must select a file to upload',
        variant: 'destructive',
        duration: 2000,
      });
      return;
    }
    const compress = new Compress();
    const compressOptions = {
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 0.8,
    };
    
    compress
      .compress([file], compressOptions)
      .then((compressedFiles) => {
        const compressedFile = compressedFiles[0] as any;
        
        const imageRef = ref(
          storage,
          `my-images/${currentUser?.email}/${compressedFile.name + v4()}`,
        );

        uploadBytes(imageRef, compressedFile.data)
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((url) => {
            setImageUrls((prevUrls) => [...prevUrls, url]);
            toast({
              title: 'File was successfully uploaded',
              className: 'bg-green-400',
              duration: 2000,
            });
            setTimeout(() => {
              router.push('/files');
            }, 1000);
          })
          .catch((error) => {
            console.error('Error uploading file: ', error);
            toast({
              title: 'File uploading failed',
              variant: 'destructive',
              duration: 2000,
            });
          });
      })
      .catch((error) => {
        console.error('Error compressing file: ', error);
        toast({
          title: 'File compression failed',
          variant: 'destructive',
          duration: 2000,
        });
      });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleCancelUpload = () => {
    setFile(null);
    toast({
      title: 'Upload cancelled',
      className: 'bg-red-400',
      variant: 'destructive',
      duration: 2000,
    });
  };

  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <Upload className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' />
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
          </div>
          <input
            onChange={handleFileChange}
            id='dropzone-file'
            type='file'
            className='hidden'
          />
        </label>
      </div>
      <div className='mt-5'>
        {file ? <FileDisplayPreview file={file} /> : null}
        {file && (
          <Button
            onClick={handleCancelUpload}
            className='mt-3'
            variant={'default'}
          >
            Cancel Upload
          </Button>
        )}
      </div>
      <br />
      <Button onClick={handleUploadFile} className='mt-5'>
        Upload{' '}
      </Button>
    </>
  );
};

export default UploadForm;
