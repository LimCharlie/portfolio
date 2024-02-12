import { Tag } from '../Tags/Tag';
import { CardProps } from '@/app/interfaces/CardProps';

export const Card: React.FC<CardProps> = ({ experiences }) => {
  return (
    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-crimson-v2 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
      <div className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
        {experiences.dateStart} - {experiences.dateEnd}
      </div>
      <div className='z-10 sm:col-span-6'>
        <h3 className='font-medium leading-snug text-slate-200'>
          <div>
            <a
              className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-solid-crimson focus-visible:text-solid-crimson  group/link text-base'
              href={experiences.url}
              target='_blank'
            >
              {experiences.title}
              <span className='pl-2'> {experiences.companyName} </span>
            </a>
          </div>
        </h3>
        <div className='mt-2 text-sm leading-normal text-white'>
          <ul className='flex flex-col gap-4'>
            {experiences.content.map((content, index) => (
              <li
                className='relative before:absolute before:content-["▹"] before:left-[0px] before:top-1.5 before:leading-3 pl-7'
                key={index}
              >
                <div>{content}</div>
              </li>
            ))}
          </ul>
        </div>
        <ul className='mt-2 flex flex-wrap'>
          {experiences.listOfLanguage.map((language, index) => (
            <li key={index} className='mr-1.5 mt-2'>
              <Tag name={language} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
