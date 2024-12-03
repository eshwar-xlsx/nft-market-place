import React from "react";
import PropTypes from "prop-types";
import "./Creative_Collectors.css";

const Creative_Collectors = ({ artists }) => {
  // Splitting the artists into 3 columns
  const column1 = artists.slice(0, Math.ceil(artists.length / 3));
  const column2 = artists.slice(Math.ceil(artists.length / 3), Math.ceil(2 * artists.length / 3));
  const column3 = artists.slice(Math.ceil(2 * artists.length / 3));

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4">
          <div className="artist-column">
            {column1.map((artist, index) => (
              <div className="artist-name" key={index}>
                <div className="artist-info">
                  <div className="artist-image-container">
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="artist-image"
                    />
                  </div>
                  <div className="artist-text">
                    <h5>{artist.name}</h5>
                    <p className="artist-description">Short description</p> {/* Add 2-3 words description */}
                    <p>{artist.count} NFTs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-md-4">
          <div className="artist-column">
            {column2.map((artist, index) => (
              <div className="artist-name" key={index}>
                <div className="artist-info">
                  <div className="artist-image-container">
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="artist-image"
                    />
                  </div>
                  <div className="artist-text">
                    <h5>{artist.name}</h5>
                    <p className="artist-description">Short description</p>
                    <p>{artist.count} NFTs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-4">
          <div className="artist-column">
            {column3.map((artist, index) => (
              <div className="artist-name" key={index}>
                <div className="artist-info">
                  <div className="artist-image-container">
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="artist-image"
                    />
                  </div>
                  <div className="artist-text">
                    <h5>{artist.name}</h5>
                    <p className="artist-description">Short description</p>
                    <p>{artist.count} NFTs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
Creative_Collectors.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default Creative_Collectors;
