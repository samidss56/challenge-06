import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel className="carousel-home" controls={false}>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-image-home"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption-home">
          <h3>Fight Club</h3>
          <p>A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image-home"
          src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="movie-caption-home">
          <h3>The Godfather</h3>
          <p>Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image-home"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/hrzoy8vvUrxQixOM11pwW9AX7Bu.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="movie-caption-home">
          <h3>The Many Saints Of Newark</h3>
          <p>
          Young Anthony Soprano is growing up in one of the most tumultuous eras in Newark, N.J.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
