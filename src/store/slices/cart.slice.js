import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setProduct } from './product.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
            setCart: (state,action) => {
                    return action.payload
            }
    }
})


export const getCartThunk =() => dispatch =>{

        axios
                .get( "https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
                .then((resp) => dispatch(setCart(resp.data)))
                .catch(error => console.error(error))

}
/*
export const createProdCarThunk = data => dispatch =>{

        axios
                .post('https://e-commerce-api-v2.academlo.tech/api/v1/cart',data, getConfig())
                .then(resp=> console.log(resp.data) )
                .catch(error => console.error(error))

}
*/
export const { setCart} = cartSlice.actions;

export default cartSlice.reducer;