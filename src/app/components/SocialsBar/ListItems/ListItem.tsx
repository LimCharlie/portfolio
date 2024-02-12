import { ListItemsProps } from '@/app/interfaces/ListItemsProps';
import Link from 'next/link';
export const ListItem: React.FC<ListItemsProps> = ({ name, linkUrl, icon }) => {
  return (
    <li
      title={name}
      className='text-2xl flex justify-center items-center transition ease-in-out delay-300'
    >
      <Link
        href={linkUrl}
        className='transition ease-in-out delay-300 text-slate-200 p-2.5 hover:text-solid-crimson focus:text-solid-crimson'
        target='_blank'
      >
        {icon}
      </Link>
    </li>
  );
};
