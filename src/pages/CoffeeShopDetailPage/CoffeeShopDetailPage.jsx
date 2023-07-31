import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CoffeeShopDetailPage(props) {
    const { id } = useParams();
    const [coffeeShop, setCoffeeShop] = useState({...props.coffeeShop});

    useEffect(() => {
        axios.get(`http://localhost:3000/detail/${id}`)
            .then((response) => setCoffeeShop(response.data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <h1>{coffeeShop.name}</h1>
            <h3>Location: {coffeeShop.location}</h3>
            <h3>Rating: {coffeeShop.rating}</h3>
            <h3>Featured Item: {coffeeShop.featuredItem}</h3>
            <h3>Discription: {coffeeShop.discription}</h3>
            <h3>Website:{coffeeShop.website}</h3>
            <h3>{coffeeShop.image}</h3>

        </>
    );
}


