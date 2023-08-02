import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Add = (props) => {
    const [shop, setShop] = useState({name: '', location: '', featuredItems: '', description: '', website: '', rating: 0, image: ''});

    const navigate = useNavigate()

    const handleChange = (event) => {
        setShop({...shop, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://bamn-coffee-shops.onrender.com/coffeeshops/', shop)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

        navigate('/coffeeshops')
    }

    return (
        <div>
            <h1>Create A Coffee Shop Listing</h1>
            <>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' name='name' onChange={handleChange}/>
                    <br/><br/>
                    <input type='text' placeholder='Location' name='location' onChange={handleChange}/>
                    <br/><br/>
                    <input type='text' placeholder='Featured Items' name='featuredItems' onChange={handleChange}/>
                    <br/><br/>
                    <input type='text' placeholder='Description' name='description' onChange={handleChange}/>
                    <br/><br/>
                    <input type='text' placeholder='Website' name='website' onChange={handleChange}/>
                    <br/><br/>
                    <input type='number' placeholder='Rating' name='rating' onChange={handleChange}/>
                    <br/><br/>
                    <input type='text' placeholder='Image' name='image' onChange={handleChange}/>
                    <br/><br/>
                    <input type='submit' />
                </form>
            </>
        </div>
    );
}

export default Add