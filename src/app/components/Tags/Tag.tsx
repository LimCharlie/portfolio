import { TagProps } from "@/app/interfaces/TagProps";

export const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <div className='flex items-center rounded-full bg-primary-crimson-v2 px-3 py-1 text-xs font-medium leading-5 text-solid-crimson border-focus-crimson border-2 '>
      {name}
    </div>
  );
};
