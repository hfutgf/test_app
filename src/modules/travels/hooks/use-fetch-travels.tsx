import { useQuery } from '@tanstack/react-query';

import type { TravlesResponseType } from '../types/travels.types';

import { apiServer } from '@/api/interceptors';

export function useFetchTravels() {
  const { data: travels, isLoading: isFetchingTravels } = useQuery({
    queryKey: ['travels'],
    queryFn: async () => {
      const response = await apiServer.get<TravlesResponseType[]>('/travels');
      return response.data[0];
    },
  });

  return { travels, isFetchingTravels };
}
