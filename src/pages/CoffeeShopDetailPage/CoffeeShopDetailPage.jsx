import React from 'react';
import './CoffeeShopDetailPage.css';
// import { useParams } from 'react-router-dom';

export default function CoffeeShopDetailPage(){
    return (
        <h1 className='CoffeeShopDetailPage'>
        Coffee Shop Details Page
        </h1>
    );
}

// export default function CoffeeShopDetailPage({ coffeeShop }) {

//     let { coffeeShopName } = useParams();
//     let cs = coffeeShop.find(cs => cs.name === coffeeShopName);


//     return (
//         <div className='flex'>
//             <div className='CoffeeShopDetailPage'>
//                 <h1>{cs.name}</h1>
//                 <h3>{cs.location}</h3>

//                 <h2>Featured Items</h2>
//                 <p>{cs.featuredItems}</p>

//                 <h2>Description</h2>
//                 <p>{cs.description}</p>

//                 <h2>Website</h2>
//                 <p>{cs.website}</p>

//                 <h2>Rating</h2>
//                 <p>{cs.rating} stars</p>
//             </div>
//             <img src={`${cs.image}`} alt="" />
//         </div>
//     );
// }