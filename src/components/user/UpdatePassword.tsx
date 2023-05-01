import { useForm } from "react-hook-form";
import { req, API_BASE_URL } from "../../util/utility";

const UpdatePassword = () => {
    const form = useForm();
    const {handleSubmit,register} = form;

    const changePassword = (data:any) => {
        
        req(API_BASE_URL+"/user/change","post",data,null)
        .then(response => console.log(response))
        .catch(error => console.log(error)
        )
      }

  return (
    <div className="row justify-content-center mt-3 " id="centered">
      <div className="form-title-container">
          <h4 className="form-title" >Password Update Form</h4>
        </div>
      <div className="shadow p-3 mb-5 rounded" id="form-card">
        
        <form action="" method="post" onSubmit={handleSubmit(changePassword)}>
          <div className="mb-3">
     
            <input
              type="password"
              className="form-control"
              id="titleField"
              placeholder="Enter Old Password"
              {...register("oldPassword")}
            />
          </div>
          <div className="mb-3">

            <input
              type="password"
              className="form-control"
              id="passwordField"
              placeholder="Enter new Password"
              {...register("newPassword")}
            />
          </div>
          <div className="mb-3">
          
            <input
              type="password"
              className="form-control"
              id="passwordField"
              placeholder="Re-enter new Password"
              
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
