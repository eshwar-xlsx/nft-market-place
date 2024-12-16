import React from "react";
import PropTypes from "prop-types";
import "./Creative_Collectors.css";

const Creative_Collectors = ({ artists }) => {
  
  const groupSize = 3;
  const groupedArtists = [];
  for (let i = 0; i < artists.length; i += groupSize) {
    groupedArtists.push(artists.slice(i, i + groupSize));
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {groupedArtists.slice(0, 3).map((group, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="artist-box">
              {group.map((artist, idx) => (
                <div className="artist-item" key={idx}>
                  <div className="artist-info d-flex align-items-center">
                    <div className="artist-image-container">
                      <img
                        src={artist.imageUrl}
                        alt={artist.name}
                        className="artist-image"
                      />
                    </div>
                    <div className="artist-details">
                      <h5 className="artist-name">{artist.name}</h5>
                      <p className="artist-description">{artist.description || "Unique collector"}</p>
                      <p className="artist-count">{artist.count} NFTs</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Creative_Collectors;
