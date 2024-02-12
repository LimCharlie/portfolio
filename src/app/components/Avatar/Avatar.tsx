'use client';
import Image from 'next/image';

export const Avatar = ({ pictureUrl = '' }) => {
  return (
    <div className='w-28 h-28 relative mb-6'>
      <Image src={pictureUrl} alt='Charlie LIM' width={200} height={200}/>
    </div>
  );
};
