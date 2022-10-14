import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import avatar from "../../assets/img/profile.png";
// import { useDispatch } from "react-redux";

export default function Header() {
  // const dispatch = useDispatch;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // const isLogin = localStorage.getItem("token");
  const isLogin = true;

  const handleLogout = () => {
    localStorage.clear();
    // dispatch(isLogin(true));
    navigate("/signin");
  };
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  return (
    <div className="header sticky-top">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">HM</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home Anchor
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/manage-event" className="nav-link">
                  Create Event
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Location
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-3">
              {isLogin ? (
                <>
                  <div style={{ cursor: "pointer" }}>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <p className="my-auto">
                    {user.data.name ? user.data.name : "Anonymous"}
                  </p>
                  <button
                    className="dropdown-item navbar-dropdown-profile-item"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleNavigate("signin")}
                  >
                    Signin
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleNavigate("signup")}
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
