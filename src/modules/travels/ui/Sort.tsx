import { CheckIcon } from 'lucide-react';
import { useEffect } from 'react';

import { FilterSectionsIcon } from '@/assets/icons/FilterSectionsIcon';
import { SortAscIcon } from '@/assets/icons/SortAscIcon';
import { SortDescIcon } from '@/assets/icons/SortDescIcon';
import { SortIcon } from '@/assets/icons/SortIcon';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type SortProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSortValue: React.Dispatch<React.SetStateAction<string>>;
  sortValue: string;
};

export default function Sort({ isModalOpen, setIsModalOpen, setSortValue, sortValue }: SortProps) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const sortOptions = [
    {
      id: 'recommended',
      label: 'Рекомендуемые',
      icon: <SortIcon className="size-6 text-blue-500" />,
    },
    {
      id: 'cheapest',
      label: 'Самые дешевые',
      icon: <SortAscIcon className="size-6 text-blue-500" />,
    },
    {
      id: 'expensive',
      label: 'Сначала дорогие',
      icon: <SortDescIcon className="size-6 text-blue-500" />,
    },
    {
      id: 'rating',
      label: 'Низкая цена и высокий рейтинг',
      icon: <FilterSectionsIcon className="size-6 text-blue-500" />,
    },
  ];

  const handleApply = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative md:hidden block">
        {isModalOpen && (
          <>
            <div
              className="fixed inset-0 bg-blue-950/40 backdrop-blur-xs bg-opacity-50 z-[100]"
              onClick={() => setIsModalOpen(false)}
            />

            <div className="fixed bottom-0 max-w-[1024px] mx-auto left-0 right-0 bg-gray rounded-t-lg z-[999] animate-slide-up">
              <div className="py-3 px-4">
                <div className="flex items-center justify-center">
                  <div className="w-[50px] h-[6px] bg-blue-500 rounded-[10px] mx-auto mb-6" />
                </div>

                <h2 className="text-dark font-semibold text-[18px] leading-[22px]">Сортировка</h2>

                <div className="mt-[15px] flex flex-col gap-2.5">
                  <RadioGroup
                    value={sortValue}
                    onValueChange={setSortValue}
                    className="flex flex-col gap-[10px]"
                  >
                    {sortOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between bg-white px-4 py-5 rounded-2xl"
                      >
                        <label
                          htmlFor={option.id}
                          className="flex items-center space-x-3 cursor-pointer flex-1"
                        >
                          <span className="text-blue-500 text-lg">{option.icon}</span>
                          <span className="text-dark font-medium leading-[22px]">
                            {option.label}
                          </span>
                        </label>
                        <RadioGroupItem
                          value={option.id}
                          id={option.id}
                          className="relative border-[2px] border-black/50 size-6 rounded-full
             data-[state=checked]:border-blue-500
             data-[state=checked]:bg-white
             after:content-[''] after:absolute after:inset-1 after:rounded-full 
             after:bg-blue-500 data-[state=unchecked]:after:hidden"
                        />
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <button
                  onClick={handleApply}
                  className="w-full bg-blue-500 mt-[25px] text-white py-3 px-4 rounded-lg font-bold text-base"
                >
                  Применить
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="md:block hidden">
        <DropdownMenuContent className="w-72 p-1">
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.id}
              onSelect={() => setSortValue(option.id)}
              className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-blue-500">{option.icon}</span>
                <span className="text-sm text-gray-900">{option.label}</span>
              </div>
              {sortValue === option.id && <CheckIcon className="w-4 h-4 text-blue-500" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </div>
    </>
  );
}
