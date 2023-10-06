import Header from "../../components/Header/Header";
import style from './LoginPage.module.scss'

function LoginPage() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.info}>
          <h1>Sign In</h1>
          <p>
            Log in to access your account or create one. Verify your email for
            seamless access.
          </p>
          <div >
            <p>email</p>
            <input placeholder="Your email" />
          </div>
          <div>
            <p>password</p>
            <input placeholder="Must be at least 8 characters." />
          </div>
        </div>
        <button>Continue</button>
        <p>Not registered yet? Sign Up</p>
      </div>
    </div>
  );
}

export default LoginPage;
