import { FC } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { v4 } from 'uuid';

interface ICardProps {
  item: string;
}

const FileCard: FC<ICardProps> = ({ item }: ICardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File - {v4()}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={item} />
        <CardFooter>
          <Button className='mt-4' variant={'default'} size={'lg'}>
            Share file with friends
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default FileCard;
