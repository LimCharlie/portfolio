import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ListItem } from './ListItems/ListItem';

export const SocialBar = () => {
  const socialLinks = [
    {
      name: 'Github',
      icon: <FiGithub />,
      link: 'https://github.com/LimCharlie',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/limcharlie/',
    },
  ];

  return (
    <>
      <div className='ml-1 mt-8 lg:hidden'>
        <ul className='flex items-center'>
          {socialLinks.map(({ name, icon, link }) => (
            <ListItem key={name} name={name} icon={icon} linkUrl={link} />
          ))}
        </ul>
      </div>
      <div className='fixed bottom-0 left-20 hidden lg:block'>
        <ul className="list-none flex gap-2 flex-col after:content-[''] after:block after:w-0.5 after:h-[90px] after:bg-white after:mx-auto">
          {socialLinks.map(({ name, icon, link }) => (
            <ListItem key={name} name={name} icon={icon} linkUrl={link} />
          ))}
        </ul>
      </div>
    </>
  );
};
