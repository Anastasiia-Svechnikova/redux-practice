import { useSelector, useDispatch } from "react-redux";
import { actionDeleteProduct } from "store/basket/actions.basket";
import s from './basketPage.module.css';

const BasketPage = () => {
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    const handleDeleteProduct = (id) => {
        dispatch(actionDeleteProduct(id))
    }

    const elements = basket.map(({ id, name, price }) => <li key={id}>
        <p>{name}</p>
        <span>{price}</span>
        <button className={s.btn} type="button" onClick={()=>handleDeleteProduct(id)}>Remove</button>

    </li>)

    return (
        <div>
            <h2>In your basket:</h2>
            {basket.length ? <ul className={s.list}>
                {elements}
            </ul> : <p>It's empty here...</p>}
            
        </div>
    )
}
export default BasketPage