import logo from "../../assets/img/logo.png";
import Header from "../../components/Header";
import "./signup.css";

function Signup() {
  return (
    <>
      <Header />
      <main>
        <aside className="side-content">
          <img className="side-img" src={logo} alt="icon" />
        </aside>
        <section className="main-header">
          <header className="header">
            <img className="header-logo" src={logo} alt="logo" />
          </header>
          <div className="title">
            <h1 className="title-text">Sign Up</h1>
            <div className="has-account">
              <p className="has-account-text">Already have an account?</p>
              <button className="log-in">Log in</button>
            </div>
          </div>
          <div className="form">
            <form className="form-container">
              <input
                type="text"
                className="form-input"
                placeholder="Fullname"
              />
              <input type="text" className="form-input" placeholder="Email" />
              <input
                type="password"
                className="form-input"
                placeholder="Password"
              />
              <input
                type="password"
                className="form-input"
                placeholder="Confirm Password"
              />
              <input type="checkbox" checked="checked" className="checkbox">
                Accept terms and condition{" "}
              </input>
              <button className="button-signup">Sign Up</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Signup;
