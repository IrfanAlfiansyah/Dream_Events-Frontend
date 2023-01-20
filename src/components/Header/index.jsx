import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

// import avatar from "../../assets/img/profile.png";
// import { useDispatch } from "react-redux";

export default function Header() {
  // const dispatch = useDispatch;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
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

  const handleProfile = () => {
    navigate(`/Profile/${userId}`);
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
                <Link to="/" className="nav-link">
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
            <div className="profile d-flex gap-3">
              {isLogin ? (
                <>
                  <div style={{ cursor: "pointer" }}>
                    <img
                      src={
                        user.data.image
                          ? `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${user.data.image}`
                          : require("../../assets/img/profile-default.svg")
                      }
                      className="photo"
                      width={50}
                      height={50}
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      alt="profile"
                    />
                    <ul
                      className="dropdown-menu dropdown-menu-white"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <button
                          // to="/Profile/:userId"
                          onClick={handleProfile}
                          className="nav-link link_header"
                        >
                          Profil
                        </button>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="my-auto">
                    {user.data.username ? user.data.username : "Anonymous"}
                  </p>
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
