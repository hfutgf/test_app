import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <LoaderCircle className="text-blue animate-spin w-8 h-8" />
    </div>
  );
};

export default Loading;
