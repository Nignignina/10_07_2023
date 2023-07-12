import { useParams, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { locationList } from "../../mock/location";

export default function () {
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const onHandleclick = (id) => {
    console.log(id);
    navigate(`/locations/${id}`);
  };
  const onProductsRender = () => {
    return locationList.map((data) => (
      <div key={data.id} className={styles.product}>
        <img
          src={data.imageLocation}
          alt={data.name}
          onClick={() => onHandleclick(data.id)}
        />
        <div className={styles.text}>
          <h2> {data.name}</h2>
          <p>{data.location} </p>
        </div>
      </div>
    ));
  };

  return (
    <div className={`${styles.WrapperProduct}`}>
      {locationList.length ? onProductsRender() : <p>attesa</p>}
    </div>
  );
}
