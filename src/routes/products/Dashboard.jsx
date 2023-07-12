import { useEffect, useState } from "react";
import { auth } from "../../mock/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <p> {auth.username}</p>
    </div>
  ) : (
    navigate("/")
  );
}
