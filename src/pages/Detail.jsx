import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { Footer } from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getPostDetails } from "../redux/actions/postActions";

function Detail() {
  const [ setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <NavbarComponent onSearchResults={handleSearchResults} />

      <Carousel className="carousel-detail" controls={false}>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${postDetails?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption-detail">
            <div
              className="Movie-wrapper-detail mb-2 mx-1"
              key={postDetails?.id}
            >
              <img
                className="Movie-image mt-4"
                src={`https://image.tmdb.org/t/p/original/${postDetails?.poster_path}`}
                alt=""
                style={{ width: "185px", borderRadius: "10px" }}
              />
            </div>
            <h2 className="Movie-caption-title">{postDetails?.title}</h2>
            <p className="Movie-caption-text">{postDetails?.overview}</p>
            <p className="Movie-rate">
              <StarFill className="Icon-star" />
              {postDetails?.vote_average.toFixed(1)}/ 10
            </p>
            <Button className="Movie-caption-button" variant="outline-danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </>
  );
}

export default Detail;
