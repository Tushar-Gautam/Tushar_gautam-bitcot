import { useState } from "react";
import { FormRow } from "../components";
import logo from "../assets/images/thumbnails/Logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [values, setValues] = useState({});
  let navigate = useNavigate();

  function encryptPassword(password) {
    const encodedPassword = btoa(password);
    return encodedPassword;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      return alert("Passwords should match");
    }
    const encryptedPassword = encryptPassword(password);
    const obj = {
      email: email,
      password: encryptedPassword,
    };
    localStorage.setItem("userCredentials", JSON.stringify(obj));
    alert("Successfully Signed up. Redirect to login Page");
    return navigate("/");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div id="wrapper">
      <div className="page-wrapper auth_wrapper">
        <div className="content-area-wrapper">
          <div className="content-wrapper">
            <div className="container">
              <div className="card products_blc">
                <div className="card-body">
                  <div className="card_content_wrap text-center"></div>
                  <div className="card_content_wrap text-center">
                    <div className="logo_wrap">
                      <img src={logo} alt="logo" />
                      <h6>Create an account</h6>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form_wrapper">
                        <div className="mb-4">
                          <FormRow
                            type="email"
                            name="email"
                            labelText="Email"
                            value={values.email}
                            handleChange={handleChange}
                            placeholder="demo@demo.com"
                          />
                        </div>
                        <div className="mb-4">
                          <FormRow
                            type="password"
                            name="password"
                            labelText="Password"
                            value={values.password}
                            handleChange={handleChange}
                            placeholder="********"
                          />
                        </div>
                        <div className="mb-4">
                          <FormRow
                            type="password"
                            name="confirmPassword"
                            labelText="Confirm Password"
                            value={values.confirmPassword}
                            handleChange={handleChange}
                            placeholder="********"
                          />
                        </div>
                        <div className="mb-0 auth_btn">
                          <button
                            type="submit"
                            className="theme-btn-primary theme-btn"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="already">
                          {" "}
                          <NavLink to={"/add-product"}>
                            Already have Account
                          </NavLink>
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
  );
}

export default SignUp;
