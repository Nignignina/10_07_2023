import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { auth } from "../../mock/auth";
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      if (auth.username === userName && auth.password === userPassword) {
        alert(`${auth.username} you are welcome`);
        localStorage.setItem("auth", true);
        navigate("/dashboard");
        console.log({ userName, userPassword });
      } else throw new Error(" password o username errati");
    } catch (error) {
      alert(error.message);
    }
  };

  const onHandleUserName = (e) => {
    setUserName(e.target.value);
  };
  const onHandleUserPassword = (e) => setUserPassword(e.target.value);
  console.log(userPassword);

  return (
    <div className={styles.Login}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          className={styles.form__input}
          value={userName}
          onChange={onHandleUserName}
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className={styles.form__input}
          value={userPassword}
          type="password"
          placeholder="Password"
          name="Password"
          onChange={onHandleUserPassword}
        />
        <input className={styles.form__submit} type="submit" value="Log in" />
      </form>
    </div>
  );
};
export default Login;
