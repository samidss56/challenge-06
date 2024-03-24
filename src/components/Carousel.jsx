import { useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions/postActions";
import { PlayFill } from "react-bootstrap-icons";

const HomeCarousel = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);
  console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const imageUrl = import.meta.env.VITE_BACKDROP_PATH_URL;
  const trailerUrl = import.meta.env.VITE_YOUTUBE_URL;
  const movieCarousel = posts?.filter((post) => post?.backdrop_path);

  return (
    <div>
      <Carousel className="carousel-home" controls={false}>
        {movieCarousel.slice(2, 5).map((post) => (
          <Carousel.Item key={post?.id}>
            <img
              className="carousel-image-home"
              src={`${imageUrl}${post?.backdrop_path}`}
              alt="First slide"
            />
            <div className="movie-description-wrapper-carousel">
              <div className="movie-description-carousel">
                <h2>{post?.title}</h2>
                <p className="m-0">
                  {post?.overview.split(" ").slice(0, 20).join(" ")}...
                </p>
                <Button
                  href={`${trailerUrl}${post?.videos[0]?.key}`}
                  target="_blank"
                  className="movie-button-home"
                  variant="danger"
                >
                  Watch Trailer
                  <PlayFill className="movie-button-icon"/>
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
