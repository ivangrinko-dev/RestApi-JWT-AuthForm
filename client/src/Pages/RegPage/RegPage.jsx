import style from "./RegPage.module.scss";
import Header from "../../components/Header/Header";

function RegPage() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Welcome, let's create an account</h1>
                    <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                </div>
                <div className={style.log}>
                    <div className={style.blokName}>
                        <div>
                            <p>name</p>
                            <input placeholder="Your name"></input>
                        </div>
                        <div>
                            <p>surname</p>
                            <input placeholder="Your surname"></input>
                        </div>
                    </div>

                    <div>
                        <p>email</p>
                        <input placeholder="Your email"></input>
                    </div>
                    <div>
                        <p>password</p>
                        <input placeholder="Must be at least 8 characters."></input>
                    </div>
                </div>
                
                <button>Continue</button>
                <p className={style.text}>Already registered? Sign In</p>

            </div>


        </div>
    )
}

export default RegPage
