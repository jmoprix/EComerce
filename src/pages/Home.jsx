import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProductThunk, filterCategoriesThunk } from '../store/slices/product.slice';
import { Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        dispatch(getProductThunk())

        axios
            .get("https://e-commerce-api.academlo.tech/api/v1/products/categories/")
            .then(resp => setCategories(resp.data.data.categories))
            .catch(error => console.error(error))

    }, [])

    return (
        <div>
            <div className="button">
                {
                    categories.map(category => (
                        <Button
                            key={category.id}
                            variant="primary"
                            onClick={() => dispatch(filterCategoriesThunk(category.id))}
                        >
                            {category.name}
                        </Button>
                    ))
                }
                <Button
                    onClick={() => dispatch(getProductThunk())}
                >See all
                </Button>
            </div>
            <Row xs={1} md={2} lg={3} >
                {
                    product?.map(productItem => (
                        < Col className='col' key={productItem.id}>
                            <div >
                                <Card  style={{ width: '18rem' }} >
                                    <div
                                        className='image'
                                        style={{ backgroundImage: `url(${productItem.productImgs[1]})` }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            className="image2"
                                            src={productItem.productImgs[0]}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title><h4>{productItem.title}</h4></Card.Title>
                                        <Card.Text>
                                            {productItem.status}
                                        </Card.Text>
                                        <Card.Text>
                                            {productItem.price} Bs
                                        </Card.Text>
                                        <Button
                                            className="btn btn-lg btn-primary"
                                            type="button"
                                            variant="primary"
                                            as={Link}
                                            to={`/product/${productItem.id}`}>Description</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div >
    );
};
export default Home;