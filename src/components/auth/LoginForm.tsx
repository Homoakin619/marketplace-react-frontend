import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../util/utility";



const LoginForm = () => {
  const navigate = useNavigate();
  const loginForm = useForm();
  const {handleSubmit,register} = loginForm;

  const processLogin = async (data:any) => {
        await axios.post(API_BASE_URL + "/auth/login",data)
                  .then((response) => {
                    localStorage.clear()
                    const token = response.data['token']
                    localStorage.setItem("user-token",token);
                    navigate("/")
                  })
  }

  return (
    <div className="row justify-content-center mt-3 ">
      <div className="col-4 shadow p-3 mb-5 rounded">
          <div className="m-3">
            <h4>Login Form</h4>
          </div>
          <form action="" method="post" onSubmit={handleSubmit(processLogin)}>
            <div className="mb-3">
              <label htmlFor="titleField" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="titleField"
                placeholder="Email"
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
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default LoginForm