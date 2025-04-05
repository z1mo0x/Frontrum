import { Link } from "react-router-dom"
export default function NotFoundPage() {
    return (
        <>
            <div>NotFoundPage</div>
            <Link to="/">Home from link</Link>
            <br />
            <a href="/">Home from A</a>
        </>

    )
}
