import { Presentation } from '../presentation/Presentation';
import { Experiences } from '../Experiences/Experiences';
import { Contact } from '../contact/Contact';

export const Content = () => {
  return (
    <div className='pt-24 lg:w-1/2 lg:py-24'>
      <Presentation />
      <Experiences />
      <Contact />
    </div>
  );
};
