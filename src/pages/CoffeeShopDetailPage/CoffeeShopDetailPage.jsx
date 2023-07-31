import React from 'react';
import './CoffeeShopDetailPage.css';
import { useParams } from 'react-router-dom';

export default function CoffeeShopDetailPage({ coffeeShop }) {

    let { coffeeShopName } = useParams();
    let coffeeShopD = coffeeShop.find(cs => cs.name === coffeeShopName);


    return (
        <div className='flex'>
            <div className='CoffeeShopDetailPage'>
                <h1>{coffeeShopD.name}</h1>
                <h3>{coffeeShopD.location}</h3>

                <h2>Featured Items</h2>
                <p>{coffeeShopD.featuredItems}</p>

                <h2>Description</h2>
                <p>{coffeeShopD.description}</p>

                <h2>Website</h2>
                <p>{coffeeShopD.website}</p>

                <h2>Rating</h2>
                <p>{coffeeShopD.rating} stars</p>
            </div>
            <img src={`${coffeeShopD.image}`} alt="" />
        </div>
    );
}