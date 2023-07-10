import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FormRow } from "../components";
import logo from "../assets/images/thumbnails/Logo.svg";
import { v4 as uuidv4 } from "uuid";

function Login() {
  const [values, setValues] = useState({});
  let navigate = useNavigate();

  function encryptPassword(password) {
    const encodedPassword = atob(password);
    return encodedPassword;
  }
  function generateRandomToken(length) {
    const uuid = uuidv4();
    const token = uuid.replace(/-/g, "").substring(0, length);
    return token;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    const { email, password } = userCredentials;
    if (
      email !== values.email ||
      encryptPassword(password) !== values.Password
    ) {
      return alert("Check user credentials");
    }
    const randomToken = generateRandomToken(26);
    localStorage.setItem("token", randomToken);
    return navigate("/");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container">
                <div className="card products_blc">
                  <div className="card-body">
                    <div className="card_content_wrap text-center">
                      <div className="card_content_wrap text-center">
                        <div className="logo_wrap">
                          <img src={logo} alt="logo" />
                          <h6>
                            Don’t have an account yet?{" "}
                            <NavLink to={"/signup"}>Sign Up</NavLink>
                          </h6>
                        </div>
                        <form onSubmit={handleSubmit}>
                          <div className="form_wrapper">
                            <div className="mb-4">
                              <FormRow
                                type="email"
                                name="email"
                                value={values.email}
                                handleChange={handleChange}
                                placeholder="demo@demo.com"
                              />
                            </div>
                            <div className="mb-4">
                              <FormRow
                                type="password"
                                name="Password"
                                value={values.password}
                                handleChange={handleChange}
                                placeholder="********"
                              />
                            </div>
                            <div className="mb-0 auth_btn">
                              <button
                                type="submit"
                                className="theme-btn-primary theme-btn"
                              >
                                Sign In
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
