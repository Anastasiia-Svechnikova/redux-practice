import { nanoid } from 'nanoid';

export const headerItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
    end: true,
  }, {
    id: nanoid(),
    to: '/products',
    text: 'Products ',
    end: true,
  },
  {
    id: nanoid(),
    to: '/basket',
    text: 'Basket ',
    end: true,
  },

];
