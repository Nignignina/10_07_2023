import { useParams, useNavigate } from "react-router-dom";

import { locationList } from "../../mock/location";

export default function () {
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const onHandleclick = (id, name) => {
    console.log(id);
    navigate(`/locations/${id}`);
  };
  const onProductsRender = () => {
    return locationList.map((data, id, name) => (
      <div key={data.id} className="Products">
        <img
          src={data.imageLocation}
          alt={data.name}
          onClick={() => onHandleclick(id, name)}
        />
        <h2> {data.name}</h2>
        <p>{data.location} </p>
      </div>
    ));
  };

  return (
    <div className="WrapperProducts">
      {locationList.length ? onProductsRender() : <p>attesa</p>}
    </div>
  );
}
