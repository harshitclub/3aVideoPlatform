import "./style.css";
import miniLogo from "../../../assets/favicon.png";
const Login = () => {
  return (
    <>
      <main className="login width100 flex alignCenter justifyCenter flexColumn">
        <section className="loginCParent width100 flex alignCenter justifyCenter flexColumn">
          <div className="loginContainer flex alignCenter justifyCenter width95 maxWidth">
            <div className="loginForm width45">
              <h1>
                Welcome To Homekraft E-Learning{" "}
                {/* <img src={miniLogo} alt="small logo" /> */}
              </h1>
              <form>
                {/* <h3>Email</h3> */}
                <input placeholder="Email" />

                {/* <h3>Password</h3> */}
                <input placeholder="Password" />

                <button type="submit">Login</button>
                <p style={{ marginBottom: "0.5rem" }}>
                  Forget Password - <a href="/">Click here</a>
                </p>
                <p>
                  Don't Have Account - <a href="/signup">Signup</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
