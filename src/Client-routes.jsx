
import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import BasketPage from 'pages/BasketPage';
import ProductsPage from 'pages/ProductsPage';



const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default ClientRoutes;