import { useNavigate } from "react-router-dom";

import { locationList } from "../../mock/location";

export default function () {
  const onProductsRender = () => {
    return locationList.map((data, id) => (
      <div className="Products">
        <img
          src={data.imageLocation}
          alt={data.name}
          onClick={onHandleclick(id)}
        />
        <h2> {data.name}</h2>
        <p>{data.location} </p>
      </div>
    ));
  };

  const navigate = useNavigate();
  // const [products, setProducts] = useState([]);

  const onHandleclick = (id) => {
    navigate(`/products/${id}`);
    console.log(`/products/${id}`);
  };
  return (
    <div className="WrapperProducts">
      {locationList.length ? onProductsRender() : <p>attesa</p>}
    </div>
  );
}
