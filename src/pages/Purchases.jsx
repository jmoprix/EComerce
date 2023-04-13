import React from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setIsLoading } from '../store/slices/isLoading.slice';
import { useState } from 'react';
import { useEffect } from 'react';
//import getConfig from '../utils/getConfig'

const Purchases = () => {
    /*
    const [purchases, setPurchases] = useState({})
    const dispatch =useDispatch()

    useEffect(()=>{

        axios
        .get(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}/`)
        .then(resp=> setDetail(resp.data))

    },[])
*/
    return (
        <div>
            <h1>Purchases</h1>
        </div>
    );
}

export default Purchases;