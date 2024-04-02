// requireAuth.js
import React from "react";
import { connect } from "react-redux";
import { useNavigate  } from "react-router-dom";

const requireAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();

    React.useEffect(() => {

      if (!props.isLoggedIn) {
        navigate("/login");
      }
    }, [props.isLoggedIn, navigate]);

    // Render the component only if authenticated
    return props.isLoggedIn ? <Component {...props} /> : null;
  };

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn
    };
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuth;