import { BrowserRouter } from 'react-router-dom';
import Header from './modules/Header';
import ClientRoutes from './Client-routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ClientRoutes />
    </BrowserRouter>
  );
};