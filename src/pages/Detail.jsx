import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { Footer } from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getPostDetails } from "../redux/actions/postActions";
import { motion } from "framer-motion";

function Detail() {
  const [setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);
  // console.log(postDetails);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const youtubeUrl = () => {
    const url =
      postDetails?.videos?.length > 0
        ? `https://www.youtube.com/embed/${postDetails.videos[0].key}`
        : "";
    return url;
  };

  return (
    <>
      <NavbarComponent onSearchResults={handleSearchResults} />

      <Carousel className="carousel-detail" controls={false}>
        <Carousel.Item>
          <img
            className="carousel-image-detail"
            src={`https://image.tmdb.org/t/p/original/${postDetails?.backdrop_path}`}
            alt="First slide"
          />
          <div className="movie-description-wrapper">
            <motion.div
              className="movie-image-wrapper-detail"
              key={postDetails?.id}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="movie-image-detail"
                src={`https://image.tmdb.org/t/p/original/${postDetails?.poster_path}`}
                alt=""
              />
            </motion.div>
            <div className="movie-description">
              <h2 className="movie-title-detail">{postDetails?.title}</h2>
              <p className="movie-description-detail">
                {postDetails?.overview}
              </p>
              <div className="movie-genres">
                {postDetails?.genres.map((genre, index) => (
                  <p key={index}>{genre.name}</p>
                ))}
              </div>
              <div className="movie-rating">
                <StarFill className="Icon-star" />
                {postDetails?.vote_average.toFixed(1)} / 10
              </div>
              <Button
                href={youtubeUrl()}
                target="_blank"
                className="movie-button-detail"
                variant="danger"
              >
                Watch Trailer
              </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </>
  );
}

export default Detail;
