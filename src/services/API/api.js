

import axios from 'axios';
const BASE_URL = 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?page=1&limit=10'
export const getProducts = async () => {
    try {
        const response = await axios.get(BASE_URL)
        return response.data;
    } catch (err) {
        throw new Error(err.message)
    }
    
}
export default getProducts;