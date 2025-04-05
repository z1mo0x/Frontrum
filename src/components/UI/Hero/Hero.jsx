import { NavLink } from "react-router-dom"
import Button from "../Button/Button"
import classes from './Hero.module.css'

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.hero__background}></div>
            <div className="container">
                <div className={classes.hero__wrapper}>
                    <div className={classes.hero__title}>FRONTROOM</div>
                    <div className={classes.hero__text}>Только у нас самые современные технологии и лучшие разработчики, которые будут рады помочь!</div>
                    <div className={classes.hero__button}>
                        <NavLink to='/forum'>Перейти на форум</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
