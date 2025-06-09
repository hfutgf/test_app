import { Outlet } from 'react-router-dom';

import Header from '../ui/Header';

const TravelLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-gray pb-6 relative">
      <div className="max-w-[1280px] mx-auto">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TravelLayout;
