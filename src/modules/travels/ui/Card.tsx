import { useState } from 'react';

import type { TourDataType, TravelType } from '../types/travels.types';

import { CarIcon } from '@/assets/icons/CarIcon';
import { EarPhoneIcon } from '@/assets/icons/EarPhoneIcon';
import { ForkKnifeIcon } from '@/assets/icons/ForkKnifeIcon';
import { HeartIcon } from '@/assets/icons/HearIcon';
import { HotelIcon } from '@/assets/icons/HotelIcon';
import { LocationIcon } from '@/assets/icons/LocationIcon';
import { PlaneIcon } from '@/assets/icons/PlaneIcon';
import { StarIcon } from '@/assets/icons/StarIcon';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import formatPrice from '@/utils/formatPrice';

const Card = ({ travel, tourData }: { travel: TravelType; tourData?: TourDataType }) => {
  const [selected, setSelelcted] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden w-full  h-auto shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-[184px] md:h-[350px] rounded-md overflow-hidden relative">
        <img src={tourData?.image_original} alt="card-img" className="w-full h-full object-cover" />
        <div className="absolute top-2.5 left-2.5 z-50 bg-white rounded-[10px] flex items-center gap-1 px-2.5">
          <StarIcon className="size-[18px]" />
          <span className="text-blue-950 text-[15px] font-normal leading-[30px]">5</span>
        </div>
        <div
          onClick={() => setSelelcted(!selected)}
          className="absolute top-2.5 right-2.5 z-50 bg-white rounded-[10px] py-[6px] px-[7px]"
        >
          <HeartIcon
            className={`size-[18px] transition-colors duration-300 ${selected ? 'text-blue' : 'text-blue'}`}
            fill={selected ? 'currentColor' : 'white'}
          />
        </div>
      </div>
      <div className="w-full pt-[14px] px-4 pb-[16px]">
        <h2 className="text-dark font-medium text-[19px]">
          {tourData?.name} & {tourData?.partner}
        </h2>
        <div className="flex items-center gap-[5px]">
          <LocationIcon className="text-blue h-[14px] w-[10px]" />
          <span className="text-sm">{travel.town_name}</span>
        </div>

        <div className="flex items-center gap-1 mt-[10px]">
          <PlaneIcon className="size-[25px]" /> +
          <HotelIcon className="w-[21px] h-[25px]" /> +
          <CarIcon className="size-[25px]" /> +
          <ForkKnifeIcon className="size-[25px]" /> +
          <EarPhoneIcon className="size-6" />
        </div>

        <div className="mt-[10px]">
          <p className="text-dark text-base font-normal leading-[19px]">{tourData?.description}</p>
        </div>

        <div className="mt-[10px] pb-[10px] border-b border-dashed border-blue">
          <Carousel
            opts={{
              align: 'start',
              slidesToScroll: 1,
              dragFree: true,
            }}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="-ml-1">
              {['№ 1 из 70 отелей в Ganh Dau', '№ 1 из 70 отелей в Ganh Dau', 'Очаровательный'].map(
                (text, index) => (
                  <CarouselItem key={index} className="pl-1 basis-auto">
                    <Badge variant="gray" className="whitespace-nowrap">
                      {text}
                    </Badge>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-[15px] flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-dark font-normal text-base">
            <span>За {travel.adult}х туристов</span>
            <span>{travel.nights} ночей</span>
          </div>
          <h2 className="font-semibold text-xl leading-[30px] text-blue font-golos">
            от {formatPrice(travel.price, 'USD', 2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
