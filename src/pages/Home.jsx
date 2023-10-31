import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
import { ArrowRight } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import { getAllPosts } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);
  console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { postsSearch } = useSelector((state) => state.post);
  console.log(postsSearch);

  const PopularMovieList = () => {
    const moviesToDisplay = postsSearch?.length >= 3 ? postsSearch : posts;
    return (
      <div className="Movie-container">
        {moviesToDisplay &&
          moviesToDisplay?.length > 0 &&
          moviesToDisplay.map((post) => (
            <Col md={2} key={post.id} className="mx-4">
              <Link to={`/detail/${post.id}`}>
                <img
                  className="Movie-image"
                  src={`https://image.tmdb.org/t/p/w200/${post.poster_path}`}
                  alt={post.title}
                  style={{ width: "200px", borderRadius: "10px" }}
                />
              </Link>
            </Col>
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
        <header className="App-header d-flex">
          <Row>
            <Col md={6}>
              <h3
                className="text-start mt-4"
                style={{ marginLeft: "6.5rem", color: "black" }}
              >
                <strong>Popular Movies</strong>
              </h3>
            </Col>
            <Col md={6}>
              <h6
                className="text-end mt-4 align-content-center text-danger"
                style={{ marginRight: "6.5rem" }}
              >
                See All Movies
                <ArrowRight className="icon-arrow"></ArrowRight>
              </h6>
            </Col>
          </Row>
          <br />
          <PopularMovieList />
        </header>
      </div>

      <Footer />
    </>
  );
};

export default Home;
