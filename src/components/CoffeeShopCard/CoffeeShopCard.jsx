import { Link } from "react-router-dom";

export default function CoffeeShopCard({ props }) {
    return (
        <>
      <Link to={`/coffeeShops/${props.cs.name}`}>
          <div>
            <div>
            <h1>{props.props.cs.name}</h1>
            <h4>Rating: {props.cs.rating}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}