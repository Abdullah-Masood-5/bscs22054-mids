import React from "react";
import movieData from "../MovieData";
import "../Styles/ListingMovies.css"; // Import the CSS file

const ListingMovies = ({ listing }) => {
  return (
    <div className="listing-card">
      <img
        src={listing.image}
        alt={listing.title}
        className="listing-card-img"
      />
      <div className="listing-card-content">
        <h2 className="listing-card-title">{listing.title}</h2>
        <p className="listing-card-type">{listing.releaseDate}</p>
        <p className="listing-card-rating">Rating: {listing.rating} ⭐</p>
      </div>
    </div>
  );
};
const ListingsGrid = ({ category }) => {
  const filteredListings = category
    ? movieData.filter((listing) => listing.category === category)
    : movieData;

  return (
    <div className="listings-grid">
      {filteredListings.map((listing) => (
        <ListingMovies key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsGrid;