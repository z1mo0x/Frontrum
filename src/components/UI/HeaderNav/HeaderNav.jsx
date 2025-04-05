import classes from '../Header/Header.module.css'
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
    return (
        <ul className={classes.header__nav}>
            <li><NavLink to='/forum'>Форум</NavLink></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Новости</a></li>
        </ul>
    )
}
