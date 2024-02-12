import { Card } from '@/app/components/Cards/Card';
import { expData } from '@/app/data/experiences';

export const Experiences = () => {
  return (
    <section id='experiences' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <h2 className="text-slate-200 text-lg font-medium sm:text-xl mb-6 before:content-['02.'] before:mr-2 before:text-solid-crimson">
        Mes expériences
      </h2>
      <ol className='group/list'>
        {expData.map((exp, index) => (
          <li key={index} className='mb-12'>
            <Card experiences={exp} />
          </li>
        ))}
      </ol>
    </section>
  );
};
