import NavbarComponent from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carousel } from "react-bootstrap";
import WelcomePageImage from "../assets/WelcomePage.svg";

const WelcomePage = () => {
  return (
    <>
      <NavbarComponent />

      <Carousel className="carousel-welcome" controls={false}>
        <Carousel.Item>
          <img
            className="carousel-image-welcome"
            src={WelcomePageImage}
            alt="First slide"
          />
          <div className="movie-caption-wrapper-welcome">
            <div className="movie-caption-welcome">
              <h3>Hi, Please Log in to access the movie list.</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </>
  );
};

export default WelcomePage;
