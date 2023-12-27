import { FC, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { v4 } from 'uuid';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '@/app/lib/firebaseConfig';
import { useToast } from '@/components/ui/use-toast';
import SharedFileDialog from './SharedFileDialog';
import { CardFileType } from '@/app/types/fileTypes';

const FileCard: FC<CardFileType> = ({ item }: CardFileType) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const fileRef = ref(storage, item);
      toast({
        title: 'Delete file',
        duration: 2000,
        variant: 'destructive',
      });
      await deleteObject(fileRef);
      setIsDeleting(false);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>File - {v4()}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={item} />
        <CardFooter>
          <SharedFileDialog />
        </CardFooter>
        <div className='mt-4'>
          <Button
            onClick={handleDelete}
            disabled={isDeleting}
            size={'lg'}
            variant={'ghost'}
          >
            Delete file
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileCard;
