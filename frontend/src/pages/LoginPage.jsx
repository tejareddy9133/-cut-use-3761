import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../css/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginUser } from "../redux/authReducer/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { auth, token } = useSelector((store) => store.authReducer);
  console.log("auth", auth, token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    // console.log(userData);

    dispatch(LoginUser(userData)).then(() => {
      navigate("/");
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className={login.login_container}>
      <div className={login.login_form_container}>
        <div className={login.left}>
          <form
            className={login.form_container}
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1>Login to Your Account</h1>
            {auth ? "Login Successful ✌️" : "Login Unsuccessful"}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={login.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={login.input}
            />

            <button type="submit" className={login.green_btn}>
              Sing In
            </button>
          </form>
        </div>
        <div className={login.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={login.white_btn}>
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
