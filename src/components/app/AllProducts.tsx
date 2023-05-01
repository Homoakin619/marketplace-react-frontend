import { useEffect, useState } from "react";
import { API_BASE_URL, req } from "../../util/utility";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const endpoint = API_BASE_URL + "/product";
    req(endpoint,"get",null,{withCredentials:true})
    .then((response) => setProducts(response.data))
    .catch(error => console.log(error)
    )
    
  }, []);
  return (
    <div className="container mt-3">
      {products.length ? (
        <div className="row">
          {products.map((product) => (
            <div key={product.title} className="col-md-4 d-flex">
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between">
                    <span className="price-footer">${product.price}</span>
                    <a href="" className="btn btn-sm btn-warning">View Details</a>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h5> There are currently no products in store.</h5>
      )}
    </div>
  );
};

export default AllProducts;
