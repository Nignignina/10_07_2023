import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Product() {
  const location = useLocation();
  const params = useParams();
  console.log(params);

  return <div>cazzucazzudinamicità</div>;
}
