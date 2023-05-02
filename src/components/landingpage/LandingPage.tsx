import MiniCard from "./MiniCard";
import search from "../../assets/search.png";
import order from "../../assets/order.jpg";
import delivery from "../../assets/delivery.jpg";
import service from "../../assets/customer_service.jpg";
import reliable from "../../assets/reliable.jpg";
import Footer from "../app/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <h1 id="banner-header">The MarketPlace.</h1>
          <span id="banner-text" className="floating-text">
            {" "}
            Your Digital MarketPlace To Shop For All Your Needs
          </span>
          <a className=" jumbotron btn btn-warning"> Start Shopping</a>
        </div>
      </div>
      <section className="landing-content">
        <div className="container mt-3">
          <h3 className="section-one-title p-2 text-center">
            Complete Your Shoping In 3 Simple Steps
          </h3>
          <div className="section-one-cards p-4">
            <MiniCard image={search} />
            <MiniCard image={order} />
            <MiniCard image={delivery} />
          </div>
          <div className="section-one-cards p-4">
            <div className="p-2">
              <h3>Find Your Product of Choice</h3>
            </div>
            <div className="p-2">
              <h3>Place Your Order</h3>
            </div>
            <div className="p-2">
              <h3>Get Product Delivered Successfully</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="section-one-title p-2 text-center">
            Why Choose Us
          </h3>
          <div className="section">
            <div className="section-text">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                veritatis omnis odit aperiam consequuntur minus illum eveniet
                exercitationem officia. Aperiam quis at cum dicta consequatur
                accusamus, perspiciatis sunt impedit ipsum!
              </span>
            </div>
            <MiniCard image={reliable} />
          </div>

          <div className="section mt-3 pt-2">
            <MiniCard image={service} />
            <div className="section-text">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                veritatis omnis odit aperiam consequuntur minus illum eveniet
                exercitationem officia. Aperiam quis at cum dicta consequatur
                accusamus, perspiciatis sunt impedit ipsum!
              </span>
            </div>
          </div>

          <div className="section">
            <div className="section-text">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                veritatis omnis odit aperiam consequuntur minus illum eveniet
                exercitationem officia. Aperiam quis at cum dicta consequatur
                accusamus, perspiciatis sunt impedit ipsum!
              </span>
            </div>
            <MiniCard image={reliable} />
          </div>
        </div>
      </section>
      <div className="foot-banner">
        
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
