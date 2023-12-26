import Image from 'next/image';
import { FC } from 'react';
import ExapleFile from '../../../public/img/exampleFile.png';
import prettyBytes from 'pretty-bytes';

interface IFileDisplayPreview {
  file?: File;
}

const FileDisplayPreview: FC<IFileDisplayPreview> = ({
  file,
}: IFileDisplayPreview) => {
  const fileSize = prettyBytes(file?.size as unknown as number);

  return (
    <div className='flex items-center gap-2 justify-between'>
      <div className='flex items-center p-2'>
        <Image src={ExapleFile} alt={'Default file image'} width={50} />
        <div className='text-left'>
          <h2 className='p-1 font-bold text-[12px]'>{file?.name}</h2>
          <h2 className='p-1 font-bold text-gray-500'>
            {file?.type} - {fileSize}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FileDisplayPreview;
