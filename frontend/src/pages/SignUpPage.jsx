import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import signup from "../css/signup.module.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/users/register`;
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={signup.signup_container}>
      <div className={signup.signup_form_container}>
        <div className={signup.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={signup.white_btn}>
              Sing in
            </button>
          </Link>
        </div>
        <div className={signup.right}>
          <form className={signup.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={signup.input}
            />
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={signup.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={signup.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={signup.input}
            />
            {error && <div className={signup.error_msg}>{error}</div>}
            <button type="submit" className={signup.green_btn}>
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
