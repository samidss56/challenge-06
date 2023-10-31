import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

function GoogleLogin({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <Button
      variant="outline-danger"
      className="login-google mt-2"
      onClick={() => loginWithGoogle()}
    >
      {buttonText}
    </Button>
  );
}

GoogleLogin.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default GoogleLogin;
