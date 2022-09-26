import { useState, useEffect } from "react";
import getProducts from "services/API/api";
import s from './productsPage.module.css';

const HomePage = () => {
  const [allProducts, setallProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        console.log(res);
        setallProducts(res)
      } catch (err) {
        setErrorMessage('Something went wrong(')
        console.log(err.message)
      }
    
  }
  fetchProducts()
  }, [])
  
  const elements = allProducts.map(({ name, price, id }) => <li className={s.item} key={id}><p className={s.name}>{name}</p><p>Price: {price}</p> <button className={s.btn} type="button">Buy</button></li>)
  return (
    <>
      <h2>Products</h2>
      {allProducts && <ul className={s.list}>{ elements}</ul>}
    </>
    
  )

};

export default HomePage;