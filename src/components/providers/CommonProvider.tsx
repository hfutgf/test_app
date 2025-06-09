import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, type ReactNode } from 'react';

import Loading from '../shared/Loading';

const queryClient = new QueryClient();

const CommonProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};

export default CommonProvider;
