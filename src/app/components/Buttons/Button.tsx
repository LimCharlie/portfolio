import { ButtonProps } from "@/app/interfaces/ButtonProps";

export const Button: React.FC<ButtonProps> = ({ url = '/', content }) => {
  return (
    <a
      href={url}
      className='bg-primary-crimson-v2 text-white w-fit border-1 flex items-center rounded h-[42px] border-2 pl-[40px] pr-[40px] border-tertiary-crimson-v2 hover:bg-focus-crimson hover:border-focus-crimson'
    >
      {content}
    </a>
  );
};
