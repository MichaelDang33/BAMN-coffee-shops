import CoffeeShopCard from "../../components/CoffeeShopCard/CoffeeShopCard";

export default function CoffeeShopsPage(props) {
    return (
        <div>
            <h1>Coffee Shops</h1>
            <div>
                {
                    props.coffeeShop.map(cs => {
                        return <CoffeeShopCard key={cs.name} cs={cs} />
                    })
                }
            </div>
        </div>
    )
}