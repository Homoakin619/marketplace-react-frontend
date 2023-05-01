import { useState } from "react";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-number-input";
import E164Number from "react-phone-number-input"
import axios from "axios";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../util/utility";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState<any>();
  const loginForm = useForm();
  const {handleSubmit,register} = loginForm
  function handlePhoneInputChange(value:any) {
    setValue(value);
  }

  const handleRegister = async (data:any) => {

    const formData = {
      "name":data.name,
      "email":data.email,
      "password": data.password,
      "phone":value
    }
    console.log(formData);
    
    
      await axios.post(API_BASE_URL+"/auth/register",formData)
      .then(response => {
        console.log(response);
        navigate("/auth/login")
      })
      .catch(error => console.log(error)
      );
  }
  return (
    <div className="row justify-content-center mt-3 ">
      <div className="col-4 shadow p-3 mb-5 rounded">
        <div>
          <h4>Register Form</h4>
        </div>
        <form method="post" onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-3">
            <label htmlFor="nameField" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="nameField"
              placeholder="Fullname"
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailField" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailField"
              placeholder="Product title"
              {...register("email")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordField" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordField"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          {/* <div className="mb-3">
              <label htmlFor="phoneField" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneField"
                placeholder="Phone Number"
              />

            </div> */}
          <div className="mb-3">
            <label htmlFor="phoneField" className="form-label">
              Phone Number
            </label>
            <PhoneInput
              country="NGA"
              id="phoneField"
              value={value}
              onChange={handlePhoneInputChange}
              flags={flags}
              // {...register("phone")}
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
