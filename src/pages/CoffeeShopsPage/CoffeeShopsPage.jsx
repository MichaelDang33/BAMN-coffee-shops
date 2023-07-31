import {useState, useEffect} from 'react';
import axios from 'axios';
import Shop from './Shop'
import Edit from '../../components/Edit/Edit'

export default function CoffeeShopsPage(){
    const [coffeeShop, setCoffeeShop] = useState([])
    
    const getCoffeeShop = () => {
        axios.get('http://localhost:3000/coffeeshops')
        .then((response)=> setCoffeeShop(response.data), (err) => console.log(err))
        .catch((error) => console.log(error))
    }

    const handleEdit = (editedShop) => {
        axios.put('http://localhost:3000/coffeeshops/' + editedShop._id, editedShop)
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
                        <Shop shop={shop}/>
                        <Edit shop={shop} handleEdit={handleEdit}/>
                    </>
                )
            })}
        </>
    );
}