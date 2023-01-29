import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;

  return (
    <div className="item">
      <div className="shadow-effect">
        <p style={{ width: "51vh", fontSize: "2vh" }}>{description}</p>
      </div>

      <div className="testimonial-name">
        <img className="img-circle" src={img} alt="" />
        <h5 style={{ fontSize: "2vh" }}>{name}</h5>
        <small style={{ fontSize: "2vh", marginLeft: "-1vw" }}>{address}</small>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
