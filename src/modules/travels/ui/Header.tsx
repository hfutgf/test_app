import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from '@/assets/icons/ArrowLeft';
import { EditIcon } from '@/assets/icons/EditIcon';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white w-full min-h-[4.5rem] rounded-b-[20px] p-4 flex items-center justify-between gap-2.5">
      <Button
        onClick={() => navigate(-1)}
        variant={'secondary'}
        size={'icon'}
        className="w-12 h-12 md:w-[50px] md:h-[50px] rounded-lg"
      >
        <ArrowLeft className="size-6 text-blue-950" />
      </Button>

      <div className="flex-1 max-w-md h-12 md:h-[50px] bg-gray-50 flex flex-col items-center justify-center rounded-lg px-4">
        <h5 className="font-semibold text-sm md:text-base text-blue-950 truncate">
          Москва - Ташкент
        </h5>
        <span className="font-normal text-xs md:text-sm text-gray-500 truncate">
          28-31 августа, 2 взрослых
        </span>
      </div>

      <Button
        variant={'secondary'}
        size={'icon'}
        className="w-12 h-12 md:w-[50px] md:h-[50px] rounded-lg"
      >
        <EditIcon className="size-6 text-blue-950" />
      </Button>
    </header>
  );
};

export default Header;
