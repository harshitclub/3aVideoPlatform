import "./style.css";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="width100 flex alignCenter justifyCenter">
        <div className="navContainer width95 maxWidth flex alignCenter spaceBtw">
          <div className="navLogo">
            <img src={logo} alt="ATS Homekraft Logo" />
          </div>
          <div className="navMenu">
            <ul className="flex alignCenter justifyCenter gap2">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
              <li>
                <a href="/e-learning">E-Learning</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
