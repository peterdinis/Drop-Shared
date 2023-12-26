'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FC, useState } from 'react';
import Header from '../shared/Header';

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
        <Header text='Share this file with your friend' />
      </DialogContent>
    </Dialog>
  );
};

export default SharedFileDialog;
