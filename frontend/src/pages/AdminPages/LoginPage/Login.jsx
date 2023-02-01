import React, { useState } from "react";
import "../../AdminPages/LoginPage/Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "http://localhost:5000/admin/adminLogin"
      // console.log("THis is login details", loginDetails);
      const { username, password } = loginDetails;
      // console.log("reached here insdie 145 - logindetails", loginDetails);
      
      const { data: res } = await axios.post(
        "/admin/adminLogin?username=" +
          username +
          "&&password=" +
          password
      );
      localStorage.setItem("token", res.data);
      setIsAdminLoggedIn(true);
      // console.log("this is re.messsage======> ", res.message);
      window.location = "/admin/adminHomePage";
    } catch (error) {
      console.log("error", error.message);
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
    <div className="container-fluid bg-light">
      <div className="row main-content bg-success text-center">
        <div className="col-md-4 text-center company__info">
          <h4 className="company_title fw-bold">YFP</h4>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row">
              <h2 className="mt-3 fw-bold">Log In</h2>
            </div>
            <div className="row">
              <form
                method="post"
                action="#"
                control=""
                onSubmit={handleSubmit}
                className="form-group"
              >
                <div className="row">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form__input"
                    placeholder="USERNAME"
                    value={loginDetails.username}
                    onChange={handleChange}
                    required
                  />
                  <span id="useremailerror" class="text-danger"></span>
                  <br />
                  <br />
                </div>
                <div className="row">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form__input"
                    placeholder="Password"
                    value={loginDetails.password}
                    onChange={handleChange}
                    required
                  />
                  {error && (
                    <div>
                      <span className="text-danger">{error}</span>
                    </div>
                  )}

                  <br />
                  <br />
                </div>

                <div className="row justify-content-center">
                  <input type="submit" value="Login" className="btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
