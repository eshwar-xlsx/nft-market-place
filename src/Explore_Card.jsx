import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore_Card.css";

const Explore_Card = ({ img_url, text, price }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const placeholderImage = "/assets/placeholder.jpg";

  const detailsHandler = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const buyNowHandler = () => {
    if (img_url && text && price) {
      navigate("/bidding-page", { state: { img_url, text, price } });
    } else {
      alert("Product details are missing!");
    }
  };

  return (
    <>
      <div className="wrapper bg-dark">
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${img_url || placeholderImage})`,
          }}
        ></div>
        <h1 className="text-white">{text}</h1>
        <p className="text-white-50">{text}</p>
        <p className="text-end" style={{ marginRight: "20px", fontSize: "18px" }}>
          Price: $<span style={{ color: "green" }}>{price}</span>
        </p>
        <div className="button-wrapper text-center mb-3">
          <button className="btn btn-outline-primary me-4" onClick={detailsHandler}>
            DETAILS
          </button>
          <button className="btn btn-outline-success" onClick={buyNowHandler}>
            BUY NOW
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={img_url || placeholderImage}
                  alt="Product"
                  className="img-fluid mb-3"
                  style={{ maxHeight: "700px", objectFit: "cover" }}
                />
                <h4>{text}</h4>
                <p>Price: ${price}</p>
                <p>
                  Additional product information can go here. This is a placeholder for details.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={buyNowHandler}>
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Explore_Card;
