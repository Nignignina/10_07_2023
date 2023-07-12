import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { locationList } from "../../mock/location";
import { useState } from "react";
export default function Product() {
  const params = useParams();
  const product = locationList.find(
    (product) => product.id === parseInt(params.id)
  );

  const productRender = () => {
    if (!product) {
      return <p>Prodotto non trovato</p>;
    }

    return (
      <div className="Product">
        <h2>{product.name}</h2>
        {/* Aggiungi il resto dei dettagli del prodotto */}
      </div>
    );
  };

  console.log(params);
  console.log(product);

  return (
    <div className="Product">
      {" "}
      {productRender()}
      <Link to="/locations">
        <button>Back</button>
      </Link>{" "}
    </div>
  );
}
