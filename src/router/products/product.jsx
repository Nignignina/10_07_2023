import { useLocation, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { locationList } from "../../mock/location";
export default function Product() {
  // const location = useLocation();
  const params = useParams();
  const productData = locationList;

  // const [productData, setProductData] = useState([{ locationList }]);
  // useEffect(() => {
  //   setProductData({ params });
  // }, []);

  console.log(params);

  return (
    <div className="Product">
      {params.id}
      <Link to="/locations">
        <button> back</button>
      </Link>
    </div>
  );
}
