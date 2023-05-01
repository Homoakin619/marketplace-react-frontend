const ProfilePage = () => {
  return (
    <div className="row justify-content-center mt-3 ">
      <div className="col-4 shadow p-3 mb-5 rounded">
        <div className="card m-3">
          <div className="card-header">
            <h5>User Profile</h5>
          </div>
          <div className="card-body">
            <section className="user-section">
              <p>Account Id: <span>234jdhs9484hdks</span></p> 
              <p>Username:</p> <span></span>
              <p>
                Password: <a href="account/update/password">changePassword</a>
              </p>
            </section>
          </div>
          <div className="card-header">
            <h5>Store Details</h5>
          </div>
          <div className="card-body">
            <section className="store-section">
              <p>Store Title:</p> <span></span>
              <p>Description: </p>
              <p>Total Products: </p>
              <p>Facebook Handle: </p>
              <p>Instagram Handle: </p>
              <p>Twitter Handle: </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
