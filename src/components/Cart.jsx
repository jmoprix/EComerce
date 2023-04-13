import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import getCartThunk, { setCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = ( { show, handleClose}) => {

    const dispatch = useDispatch()

    //const [product,setProduct] = useState([])
    //console.log(getConfig())
    

    useEffect(() => {
       /* */
        axios
        .get( "https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
      /*  .then(resp=> console.log(resp.data) )
        .catch(error => console.error(error))
*/
        .then((resp) => dispatch(setCart(resp.data)))
        //.catch(error => console.error(error))
        
/*  
        dispatch( getCartThunk())

/*
        axios
            .get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
            .then(resp => setDetail(resp.data))
            .catch(error => console.error(error))
            .finally(() => {
                dispatch(setIsLoading(false))
            })*/
    },[]);
    const product = useSelector(state => state.product)
    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
            {
                product?.map(item =>(
                    <li key={item.id}>
                        No sé
                    </li>
                ))
            }
        </ul>
        </Offcanvas.Body>
    </Offcanvas>
    );
}
export default Cart;