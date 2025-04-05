import classes from '../Header/Header.module.css'
import { NavLink } from "react-router-dom";
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';

export default function HeaderNav() {
    const links = [
        {
            title: '<NavLink>Форум</NavLink>',
            link: '/forum'
        },
        {
            title: '<NavLink>Блог</NavLink>',
            link: '#'
        },
        {
            title: '<NavLink>Новости</NavLink>',
            link: '#'
        },
    ]

    return (
        <ul className={classes.header__nav}>
            {links.map((el) => { return <HeaderNavItem title={el.title} link={el.link} /> })}
        </ul>
    )
}
