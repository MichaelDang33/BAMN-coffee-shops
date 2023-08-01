import { useState, useEffect } from 'react';
import axios from 'axios';
import Shop from './Shop'
import Edit from '../../components/Edit/Edit'
import { Link } from 'react-router-dom';

export default function CoffeeShopsPage() {
    const [coffeeShop, setCoffeeShop] = useState([])

    const getCoffeeShop = () => {
        axios.get('http://localhost:3000/coffeeshops')
            .then((response) => setCoffeeShop(response.data), (err) => console.log(err))
            .catch((error) => console.log(error))
    }

    const handleEdit = (editedShop) => {
        axios.put('http://localhost:3000/coffeeshops/' + editedShop._id, editedShop)
            .then((response) => {
                getCoffeeShop()
            })
    }

    const handleDelete = (deletedShop) => {
        axios.delete('http://localhost:3000/coffeeshops/' + deletedShop._id)
            .then((response) => {
                getCoffeeShop()
            })
    }



    useEffect(() => {
        getCoffeeShop()
    }, [])

    return (
        <>
            <h1>All Coffee Shops</h1>
            {coffeeShop.map((shop) => {
                return (
                    <>
                        <img src={shop.image} />
                        <h3>Name: {shop.name}</h3>
                        <h3>Location: {shop.location}</h3>
                        <h3>Rating: {shop.rating}</h3>
                        {/* <Shop shop={shop}/> */}
                        <div>
                            {/* <Edit shop={shop} handleEdit={handleEdit} /> */}
                            {/* <button onClick={() => handleDelete(shop)}>Delete</button> */}
                            <Link to={`/details/${shop._id}`}>Details</Link>
                            
                        </div>
                        
                    </>
                )
            })}
        </>
    );
}