'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FC, useState } from 'react';
import SmallHeader from '../shared/SmallHeader';
import SharedFileForm from './SharedFileForm';

const SharedFileDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger
        onClick={() => {
          setIsOpen(true);
        }}
        asChild
      >
        <Button variant={'default'} size='lg'>
          Shared with friend
        </Button>
      </DialogTrigger>

      <DialogContent>
        <SmallHeader text='Share this file with your friend' />
        <div className='mt-4'>
            <SharedFileForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SharedFileDialog;
