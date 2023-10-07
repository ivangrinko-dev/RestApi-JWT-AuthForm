import style from './header.module.scss'
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className={style.wrapper} >
           <p><Link to={"/"}>Sign in</Link></p>
           <p><Link to={"/reg"}>Sign Up</Link></p>
        </div>
    )
}

export default Header