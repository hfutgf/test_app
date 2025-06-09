import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TravelLayout from './modules/travels/layouts/TravelLayout';
import { routes } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelLayout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
