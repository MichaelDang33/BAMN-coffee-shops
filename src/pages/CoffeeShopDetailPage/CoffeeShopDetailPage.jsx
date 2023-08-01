import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Edit from '../../components/Edit/Edit';

export default function CoffeeShopDetailPage() {

    const { id } = useParams();

    const [coffeeShop, setCoffeeShop] = useState([]);
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/coffeeshops/${id}`)
            .then(() => navigate('/coffeeshops'))
            .catch(err => console.log(err))
    }

    const handleEdit = (editedShop) => {
        axios.put(`http://localhost:3000/coffeeshops/${id}`, editedShop)
            .then(res => setCoffeeShop(res.data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/coffeeshops/${id}`)
            .then(res => setCoffeeShop(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            <div>
                <h1>{coffeeShop.name}</h1>
                <h3>{coffeeShop.image}</h3>
                <h3>Location: {coffeeShop.location}</h3>
                <h3>Featured Item: {coffeeShop.featuredItems}</h3>
                <h3>Description: {coffeeShop.description}</h3>
                <h3>Rating: {coffeeShop.rating}</h3>
                <h3>Website:{coffeeShop.website}</h3>
            </div>
            <div>

                <button onClick={handleDelete}>Delete</button>
                <Edit coffeeShop={coffeeShop} handleEdit={handleEdit} />
                <Link to='/coffeeshops'>Back</Link>

            </div>
        </>
    )

}