import classes from './ForumPost.module.css'
import pic from '../../../assets/pics/post1.jpg'
import Button from '../../UI/Button/Button'
import { NavLink } from 'react-router-dom'

export default function ForumPost({ title, text, id }) {

    return (
        <div className={classes.post}>

            <div className={classes.post__image}>
                <img src={pic} alt="" />
            </div>
            <div className={classes.post__info}>
                <div className={classes.post__title}>{title}</div>
                <div className={classes.post__descr}>{text}</div>
                <div className={classes.post__button}>
                    <NavLink to={`/posts/${id}`}>
                        <Button>Подробнее</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )

}
