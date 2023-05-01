import { useForm } from "react-hook-form";
import { API_BASE_URL, req } from "../util/utility";

const StoreForm = () => {
  const storeCreationForm = useForm();
  const { handleSubmit, register } = storeCreationForm;

  const createStore = (data: any) => {
    const endpoint = API_BASE_URL + "/store/create";

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("address", data.address);
    formData.append("image", data.image[0]);

    req(endpoint, "post", formData, null)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="row justify-content-center mt-3 " id="centered">
      <div className="form-title-container">
        <h4 className="form-title">Store Form</h4>
      </div>
      <div className="shadow p-3 mb-5 rounded" id="form-card">
        <form method="post" onSubmit={handleSubmit(createStore)}>
          <div className="mb-3">
            <label htmlFor="titleField" className="form-label">
              Store Name
            </label>
            <input
              type="text"
              className="form-control"
              id="titleField"
              placeholder="Store name"
              {...register("title")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionField" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="descriptionField"
              placeholder="Address"
              rows={3}
              {...register("address")}
            ></textarea>
          </div>
          {/* <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Instagram Handle"
              aria-label="IgHandle"
              {...register("IGHandle")}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Facebook Handle"
              aria-label="fbHandle"
              {...register("fbHandle")}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Twitter Handle"
              aria-label="twitterHandle"
              {...register("twitterHandle")}
            />
          </div> */}

          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              {...register("image")}
            />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload
            </label>
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Create Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoreForm;
