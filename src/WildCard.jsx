import React from "react";

const WildCard = () => {
  return (
    <div style={{ 
      position: "relative", 
      width: "100vw", 
      height: "100vh", 
      backgroundImage: "url('assets/stars.webp')", 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      <h2 
        className="display-3 text-white"
        style={{ position: "absolute", zIndex: 1, margin: "0", fontWeight: "bold" }}
      >
        Sorry Page Not Available
      </h2>
    </div>
  );
};

export default WildCard;
