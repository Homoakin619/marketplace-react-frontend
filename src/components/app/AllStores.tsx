import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL, req } from "../../util/utility";

const AllStores = () => {
  const [stores, setStores] = useState([]);
  console.log(stores);
  
  const endpoint = API_BASE_URL + "/store";

  useEffect(() => {
    console.log("fetching stores");
    
    req(endpoint,"get",null,{withCredentials: true})
      .then((response) => {setStores(response.data);console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container mt-3">
      {stores.length > 0 ?
        <div className="row">
        {stores.map((store) => (
          <div key={store.title} className="col-md-4 d-flex">
            <div className="card" style={{ width: "18rem" }}>
              <img src={store.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{store.title}</h5>
                <p className="card-text">
                  {store.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> : <h3>There are no stores created yet</h3>}
    </div>
  );
};

export default AllStores;
