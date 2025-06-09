import { useFetchTravels } from '../hooks/use-fetch-travels';
import Card from '../ui/Card';

import { FilterIcon } from '@/assets/icons/FilterIcon';
import { FrameIcon } from '@/assets/icons/FrameIcon';
import { SortIcon } from '@/assets/icons/SortIcon';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const Travels = () => {
  const { isFetchingTravels, travels } = useFetchTravels();

  return (
    <div className="mt-4 px-2.5 overflow-hidden">
      <div className="bg-white w-full rounded-xl py-[11px] px-[13px] flex flex-col gap-2.5">
        <div className="flex items-center justify-center gap-[15px]">
          <img src="/Logo.svg" alt="logo" className="w-[106px] h-[37px]" />
          <div className="bg-blue-500 w-[1px] h-[30px]" />
          <p className="font-medium text-dark text-sm leading-[18px]">
            Тур предоставляется надежным туроператором
          </p>
        </div>
        <hr className="w-full bg-blue-950" />
        <h5 className="font-medium text-base text-dark text-center">
          Мы подобрали для вас только лучшие отели
        </h5>
      </div>
      <div className="mt-[10px] flex items-center justify-center gap-1.5 ">
        <div
          role="button"
          aria-disabled={isFetchingTravels}
          className={cn(
            'py-[12.5px] px-[10.5px] bg-white text-base leading-[18px] font-normal rounded-lg flex items-center gap-1.5',
            isFetchingTravels && 'pointer-events-none opacity-50 cursor-not-allowed'
          )}
        >
          <FilterIcon className="text-blue size-[21px]" />
          Фильтры
        </div>
        <div
          role="button"
          aria-disabled={isFetchingTravels}
          className={cn(
            'py-[13px] px-[17.5px] bg-white text-base leading-[18px] font-normal rounded-lg flex items-center gap-1.5',
            isFetchingTravels && 'pointer-events-none opacity-50 cursor-not-allowed'
          )}
        >
          <SortIcon className="text-blue size-[21px]" />
          Сортировка
        </div>

        <div
          role="button"
          aria-disabled={isFetchingTravels}
          className={cn(
            'py-[13px] px-[17.5px] bg-blue text-white text-base leading-[18px] font-normal rounded-lg flex items-center gap-1.5',
            isFetchingTravels && 'pointer-events-none opacity-50 cursor-not-allowed'
          )}
        >
          <FrameIcon className="text-white size-4" />
          Фильтры
        </div>
      </div>
      <div className="mt-4 w-full">
        {isFetchingTravels && (
          <div className="flex flex-col gap-[15px]">
            <Skeleton className="h-[500px] w-full rounded-md" />
            <Skeleton className="h-[500px] w-full rounded-md" />
            <Skeleton className="h-[500px] w-full rounded-md" />
          </div>
        )}
        <div className="flex flex-col gap-[15px]">
          {!isFetchingTravels &&
            travels?.data?.map((travel) => <Card key={travel.id} travel={travel} />)}
        </div>
      </div>
    </div>
  );
};

export default Travels;
