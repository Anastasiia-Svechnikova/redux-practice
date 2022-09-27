import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/store';
import Header from './modules/Header';
import ClientRoutes from './Client-routes';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/redux-practice/">
      <Header />
      <ClientRoutes />
    </BrowserRouter>
    </Provider>
    
  );
};