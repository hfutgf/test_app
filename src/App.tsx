import { Route, Routes } from 'react-router-dom';

import TravelLayout from './modules/travels/layouts/TravelLayout';
import { routes } from './routes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TravelLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
