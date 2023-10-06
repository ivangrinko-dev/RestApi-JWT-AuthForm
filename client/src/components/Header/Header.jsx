import style from './header.module.scss'

function Header(){
    return(
        <div className={style.wrapper} >
           <p>Sign in</p>
           <p>Sign Up</p>
        </div>
    )
}

export default Header