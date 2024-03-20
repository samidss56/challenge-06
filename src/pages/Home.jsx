import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
import { ArrowRight } from "react-bootstrap-icons";
import { getAllPosts } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);
  // console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { postsSearch } = useSelector((state) => state.post);
  // console.log(postsSearch);

  const PopularMovieList = () => {
    const moviesToDisplay = postsSearch?.length >= 3 ? postsSearch : posts;
    return (
      <div className="movie-wrapper-home">
        {moviesToDisplay &&
          moviesToDisplay?.length > 0 &&
          moviesToDisplay.map((post) => (
            <div key={post.id}>
              <Link to={`/detail/${post.id}`}>
                <img
                  className="movie-image-home"
                  src={`https://image.tmdb.org/t/p/w200/${post.poster_path}`}
                  alt={post.title}
                />
              </Link>
            </div>
          ))}
      </div>
    );
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <NavbarComponent onSearchResults={handleSearchResults} />

      <HomeCarousel />

      <div className="App mt-2 mb-4">
        <div className="movie-headlines py-3">
          <h5 className="text-dark fw-bold my-0">Popular Movies</h5>
          <div className="all-movies d-flex justify-content-between align-items-center gap-2">
            <h5 className="text-danger fw-bold my-0">See All Movies</h5>
            <ArrowRight className="icon-arrow text-danger"></ArrowRight>
          </div>
        </div>
        <br />
        <PopularMovieList />
      </div>

      <Footer />
    </>
  );
};

export default Home;
