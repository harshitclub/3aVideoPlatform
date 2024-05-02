import "./style.css";
import miniLogo from "../../../assets/favicon.png";
const Signup = () => {
  return (
    <>
      <main className="signup width100 flex alignCenter justifyCenter flexColumn">
        <section className="signupCParent width100 flex alignCenter justifyCenter">
          <div className="signupContainer flex alignCenter justifyCenter width95 maxWidth">
            <div className="signupForm width45">
              <h1>
                Welcome To Homekraft E-Learning{" "}
                <img src={miniLogo} alt="small logo" />
              </h1>
              <form>
                {/* <h3>Full Name</h3> */}
                <input placeholder="Full Name" />
                {/* <h3>Email</h3> */}
                <input placeholder="Mail" />
                {/* <h3>Phone</h3> */}
                <input placeholder="Phone" />
                {/* <h3>Password</h3> */}
                <input placeholder="Password" />
                {/* <h3>Confirm Password</h3> */}
                <input placeholder="Confirm Password" />
                <button type="submit">Signup</button>
                <p>
                  Already Have Account - <a href="/login">Login</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
