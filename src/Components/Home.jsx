import ListingsGrid from "./ListingMovies";
import "../Styles/ListingMovies.css";

const Home = ({ category }) => {
  return (
    <div className="home">
      <h1>Movies</h1>
      <ListingsGrid category={category} />
    </div>
  );
};

export default Home;
