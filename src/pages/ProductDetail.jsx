import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from '../store/slices/isLoading.slice';
import { Button, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { filterCategoriesThunk } from '../store/slices/product.slice';

const ProductDetail = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const dispatch = useDispatch()
    const productSelected = useSelector(state => state.product)
    const [rate, setRate] = useState(0)

    useEffect(() => {

        dispatch(setIsLoading(true))

        axios
            .get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}/`)
            .then(resp => {
                setDetail(resp.data.data.product)
                dispatch(filterCategoriesThunk(resp.data.data.product.category?.id))
            })
            .catch(error => console.error(error))
            .finally(() => {
                setTimeout(() => {
                    dispatch(setIsLoading(false))
                }, 250);
            })
    }, [id])

    const addToCart = () => {
        const purchases = {
            id: detail.id,
            quantity: rate
        }
        console.log(purchases)

    }

    return (
        <div className='block'>
            <div className='fond'>
                <Carousel variant="dark" float="left">
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={detail.productImgs?.[0]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={detail.productImgs?.[1]}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={detail.productImgs?.[2]}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='text'>
                <button
                    className="btn btn-lg btn-primary"
                    type="button"
                    onClick={addToCart} >Add to cart
                </button>
                <Button onClick={() => setRate(rate - 1)}>-</Button>
                {rate}
                <Button onClick={() => setRate(rate + 1)}>+</Button>
                <h5 className="category">{detail.category}</h5>
                <p>{detail.price} Bs</p>
                <h1 className='title'>{detail.title}</h1>
                <p className='detail'
                >{detail.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;