import NavbarComponent from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carousel } from "react-bootstrap";
import WelcomePageImage from "../assets/WelcomePage.svg"

const WelcomePage = () => {
  return (
    <>
      <NavbarComponent />

      <Carousel className="carousel-welcome" controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 welcome-page"
            src={WelcomePageImage}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption-welcome">
            <h3><strong>Hi, Please Log in to access the movie list.</strong></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </>
  );
};

export default WelcomePage;
