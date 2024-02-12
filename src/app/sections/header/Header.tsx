import { Menu } from '@/app/components/Menu/Menu';
import { Button } from '@/app/components/Buttons/Button';
import { SocialBar } from '@/app/components/SocialsBar/SocialBar';

export const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-20'>
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
        Charlie LIM
      </h1>
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
        Développeur Ruby On Rails / React JS
      </h2>
      <p className='mt-4 max-w-xs leading-normal text-slate-200'>
        Passionné par le développement avec Ruby et React, je mets en œuvre des
        solutions innovantes pour créer des expériences web dynamiques et
        conviviales.
      </p>
      <div className='mt-16'>
        <Button content='Mon CV' />
      </div>
      <div>
        <Menu />
      </div>
      <SocialBar />
    </header>
  );
};
