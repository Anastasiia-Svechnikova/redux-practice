import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddProduct } from "store/basket/actions.basket";
import getProducts from "services/API/api";
import s from './productsPage.module.css';

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const basket = useSelector((state => state.basket));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setAllProducts(res)
      } catch (err) {
        setErrorMessage('Something went wrong(')
        console.log(err.message)
      }
  }
  fetchProducts()
  }, [])

  const handleAddProduct = (newId) => {
    const productToAdd = allProducts.find(({ id }) => id === newId);
    dispatch(actionAddProduct(productToAdd))
  }

  const isProductInBasket = (newId) => {
    return basket.some(({id})=> id === newId )
  }

  
  const elements = allProducts.map(({ name, price, id }) => <li className={s.item} key={id}>
    <p className={s.name}>{name}</p>
    <p>Price: {price}</p>
    <button className={s.btn} type="button" disabled={isProductInBasket(id)} onClick={() => handleAddProduct(id)}>{ isProductInBasket(id) ? "In basket" : 'Buy'}</button>
  </li>)


  return (
    <>
      <h2>Products</h2>
      {allProducts && <ul className={s.list}>{elements}</ul>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
    
  )

};

export default HomePage;