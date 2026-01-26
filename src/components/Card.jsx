<<<<<<< HEAD
import { Link } from "react-router-dom";

const Card = ({ id, title, price, image }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="font-semibold">{title}</h3>
        <p className="text-red-500 font-bold">₹ {price}</p>
      </div>
    </Link>
  );
};

export default Card;
=======
const Card = ({ title, price ,image}) => {
  return (
    <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-1g"
      />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-red-500 font-bold">Price $ {price}</p>
    </div>
  );
};

export default Card;
>>>>>>> f03efc8c054698558f1783fdd2236a615bc2173b
