import {useState} from 'react'

const Edit = (props) => {
  const [shop, setShop] = useState({...props.shop})

  const handleChange = (event) => {
    setShop({...shop, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleEdit(shop)
  }

  return (
    <>
      <details>
        <summary>Edit Coffee Shop</summary>
        <form onSubmit={handleSubmit}>
            <input type='text' value={shop.name} name='name' onChange={handleChange}/>
            <br/><br/>
            <input type='text' value={shop.location} name='location' onChange={handleChange}/>
            <br/><br/>
            <input type='text' value={shop.featuredItems} name='featuredItems' onChange={handleChange}/>
            <br/><br/>
            <input type='text' value={shop.description} name='description' onChange={handleChange}/>
            <br/><br/>
            <input type='text' value={shop.website} name='website' onChange={handleChange}/>
            <br/><br/>
            <input type='number' value={shop.rating} name='rating' onChange={handleChange}/>
            <br/><br/>
            <input type='text' value={shop.image} name='image' onChange={handleChange}/>
            <br/><br/>
            <input type='submit' />
        </form>
      </details>
    </>
  )
}

export default Edit