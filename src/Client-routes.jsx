import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import HomePage from 'pages/HomePage';
const HomePage = lazy(() => import('pages/HomePage'));
const BasketPage = lazy(() => import('pages/BasketPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
// import BasketPage from 'pages/BasketPage';
// import ProductsPage from 'pages/ProductsPage';

const ClientRoutes = () => {
  return (
    <Suspense fallback={<p>in progress...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Suspense>
  );
};

export default ClientRoutes;
