import classes from './Button.module.css'

export default function Button({ props, children }) {
    return (
        <button className={classes.button} {...props}>{children}</button>
    )
}
