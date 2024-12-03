import React, { useState } from "react";
import Categories_Card from "./Categories_Card";
import "./Categories_Card.css";

const game_data = [
  {
    game_image: "/assets/game_data_snoop_dog.avif",
    game_title: "Snoop Dog",
    game_price: "23",
  },
  {
    game_image: "/assets/game_data_snoop_dog.avif",
    game_title: "Snoop Dog",
    game_price: "23",
  },
  {
    game_image: "/assets/game_data_snoop_dog.avif",
    game_title: "Snoop Dog",
    game_price: "23",
  },
  {
    game_image: "/assets/game_data_snoop_dog.avif",
    game_title: "Snoop Dog",
    game_price: "23",
  },
  
];

const sports_data = [
  {
    sports_image: "/assets/sports_data_messi.avif",
    sports_title: "The Collab",
    sports_price: "35",
  },
  // Other sports data...
];

const movies_data = [
  {
    movie_image: "/assets/movies_data_ab.png",
    movie_title: "The Big-B",
    movie_price: "37",
  },
  
];

const comics_data = [
  {
    comics_image: "assets/movies_data_black_cat.gif",
    comics_title: "Black Cat",
    comics_price: "25",
  },
  {
    comics_image: "assets/movies_data_deadpool.gif",
    comics_title: "Black Cat",
    comics_price: "25",
  },
  {
    comics_image: "assets/movies_data_marvel.gif",
    comics_title: "Black Cat",
    comics_price: "25",
  },
  {
    comics_image: "assets/movies_data_dancing.gif",
    comics_title: "Black Cat",
    comics_price: "25",
  },
 
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const renderCategoryData = (category) => {
    switch (category) {
      case "games":
        return game_data.map((val, index) => (
          <div className="col-md-3" key={index}>
            <Categories_Card
              game_image={val.game_image}
              game_title={val.game_title}
              game_price={val.game_price}
            />
          </div>
        ));
      case "sports":
        return sports_data.map((val, index) => (
          <div className="col-md-3" key={index}>
            <Categories_Card
              game_image={val.sports_image}
              game_title={val.sports_title}
              game_price={val.sports_price}
            />
          </div>
        ));
      case "movies":
        return movies_data.map((val, index) => (
          <div className="col-md-3" key={index}>
            <Categories_Card
              game_image={val.movie_image}
              game_title={val.movie_title}
              game_price={val.movie_price}
            />
          </div>
        ));
      case "comics":
        return comics_data.map((val, index) => (
          <div className="col-md-3" key={index}>
            <Categories_Card
              game_image={val.comics_image}
              game_title={val.comics_title}
              game_price={val.comics_price}
            />
          </div>
        ));
      case "all":
        return (
          <>
            {game_data.map((val, index) => (
              <div className="col-md-3" key={index}>
                <Categories_Card
                  game_image={val.game_image}
                  game_title={val.game_title}
                  game_price={val.game_price}
                />
              </div>
            ))}
            {sports_data.map((val, index) => (
              <div className="col-md-3" key={index}>
                <Categories_Card
                  game_image={val.sports_image}
                  game_title={val.sports_title}
                  game_price={val.sports_price}
                />
              </div>
            ))}
            {movies_data.map((val, index) => (
              <div className="col-md-3" key={index}>
                <Categories_Card
                  game_image={val.movie_image}
                  game_title={val.movie_title}
                  game_price={val.movie_price}
                />
              </div>
            ))}
            {comics_data.map((val, index) => (
              <div className="col-md-3" key={index}>
                <Categories_Card
                  game_image={val.comics_image}
                  game_title={val.comics_title}
                  game_price={val.comics_price}
                />
              </div>
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-md-12">
          <div className="text-end">
            <button
              className={`btn btn-outline-secondary btn-sm ${
                activeCategory === "all" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All
            </button>
            <button
              className={`btn btn-outline-secondary btn-sm ${
                activeCategory === "sports" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("sports")}
            >
              Sports
            </button>
            <button
              className={`btn btn-outline-secondary btn-sm ${
                activeCategory === "comics" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("comics")}
            >
              Comics
            </button>
            <button
              className={`btn btn-outline-secondary btn-sm ${
                activeCategory === "movies" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("movies")}
            >
              Movies
            </button>
            <button
              className={`btn btn-outline-secondary btn-sm ${
                activeCategory === "games" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("games")}
            >
              Games
            </button>
          </div>
          <h1 className="text-white mb-4">
            {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Trending
          </h1>
          <div className="scrollable-row">
            {renderCategoryData(activeCategory)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
