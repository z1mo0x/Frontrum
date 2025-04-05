import Button from "../Button/Button";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";
import HeaderNav from "../HeaderNav/HeaderNav";
import { useDynamicLogo } from '../../../hooks/HeaderLogo'


export default function Header({ logged }) {

    const [texts, isChanged, text] = useDynamicLogo()

    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.header__wrapper}>
                    <div className={`${classes.header__logo} ${isChanged ? classes.hidden : classes.visible}`}>
                        <NavLink to="/">{text}</NavLink>
                    </div>
                    <HeaderNav />
                    <div className={classes.header__login}>
                        {logged ? <Button>Sign out</Button> : <Button>Sign in</Button>}
                    </div>
                </div>
            </div>
        </header>
    )
}
