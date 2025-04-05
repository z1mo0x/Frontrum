import classes from '../Header/Header.module.css'
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';

export default function HeaderNav() {
    const links = [
        {
            title: 'Форум',
            link: '/forum'
        },
        {
            title: 'Блог',
            link: '#'
        },
        {
            title: 'Новости',
            link: '#'
        },
    ]

    return (
        <ul className={classes.header__nav}>
            {links.map((el) => { return <HeaderNavItem title={el.title} link={el.link} /> })}
        </ul>
    )
}
