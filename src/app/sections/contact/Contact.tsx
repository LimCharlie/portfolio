import { Button } from '@/app/components/Buttons/Button';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
    >
      <h2 className="text-slate-200 text-lg font-medium sm:text-xl mb-6 before:content-['03.'] before:mr-2 before:text-solid-crimson">
        Restons en contact !
      </h2>
      <p className='mb-6 text-slate-200'>
        N&apos;hésitez pas à me contacter pour toute opportunité professionnelle ou
        simplement pour échanger sur nos passions communes. Je suis disponible
        par email ou via{' '}
        <a
          className='font-medium hover:text-solid-crimson'
          href='https://www.linkedin.com/in/limcharlie/'
          target='_blank'
        >
          LinkedIn
        </a>
        .
      </p>
      <Button url='mailto:lim.charliepro@gmail.com' content='Coucou !' />
    </section>
  );
};
