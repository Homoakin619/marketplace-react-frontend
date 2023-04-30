import axios from "axios";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../utility";

const ProductForm = () => {
  const productForm = useForm();
  const { handleSubmit, register } = productForm;

  const processProductCreation = async (data: any) => {
        console.log(data);
        const formData = new FormData();
        formData.append("title",data.title)
        formData.append("description",data.description)
        formData.append("price",data.price)
        formData.append("image",data.image[0])
        
        await axios.post(API_BASE_URL+"/product/create",formData)
        .then(response => console.log(response)
        ).catch(error => console.log(error)
        )
  }

  return (
    <div className="row justify-content-center mt-3 ">
      <div className="col-8 shadow p-3 mb-5 rounded">
        <div>
          <h4>Product Form</h4>
        </div>
        <form method="post" onSubmit={handleSubmit(processProductCreation)}>
          <div className="mb-3">
            <label htmlFor="titleField" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              className="form-control"
              id="titleField"
              placeholder="Product title"
              {...register("title")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionField" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="descriptionField"
              placeholder="Product description"
              rows={3}
              {...register("description")}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="priceField" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="priceField"
              {...register("price")}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              {...register("image")}
            />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Select Product Image
            </label>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
