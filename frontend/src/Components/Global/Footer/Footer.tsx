import "./style.css";
import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer width100 flex alignCenter justifyCenter flexColumn">
        <div className="footerParent flex alignCenter justifyCenter width95 maxWidth flexColumn">
          <div className="fContainer width60 flex alignCenter spaceBtw">
            <div className="fLogo">
              <img src={logo} alt="ATS Homekraft Footer Logo" />
            </div>
            <div className="fMenu">
              <ul className="flex alignCenter justifyCenter gap3">
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
          <div className="fCopyright width60 flex alignCenter justifyCenter">
            <p>
              Copyright © 2024 HomeKraft Infra Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
