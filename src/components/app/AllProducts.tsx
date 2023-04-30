import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utility";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  
  const token = localStorage.getItem("user-token");

  useEffect(() => {
    (async () => {
      await axios
        .get(API_BASE_URL + "/product",{withCredentials: true})
        .then((response) => {
            setProducts(response.data);
             
            console.log(response.data);
        })
        .catch((error) => console.log(error));
    })();
  }, []);
  return (
    <div className="container mt-3">
      { products.length ?
        <div className="row">
        {products.map((product) => (
          <div key={product.title} className="col-md-4 d-flex">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.imageUrl} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description}
                </p>
                <span className="price-footer">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      : <h5> There are currently no products in store.</h5>
      }
    </div>
  );
};

export default AllProducts;
