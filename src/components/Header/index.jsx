import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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
                <Link to="/detail" className="nav-link">
                  Create Event
                </Link>
                {/* <a className="nav-link" href="/detail">
                  Create Event
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Location
                </Link>
                {/* <a className="nav-link" href="#">
                  Location
                </a> */}
              </li>
            </ul>
            <div className="d-flex gap-3">
              {/* TAMPILAN JIKA LOGIN */}
              {/* <div style={{ cursor: "pointer" }}>
                <img src={avatar} alt="avatar" />
              </div>
              <p className="my-auto">John Tomson</p> */}
              {/* TAMPILAN BELUM LOGIN */}
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
