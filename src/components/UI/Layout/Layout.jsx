import { useEffect } from "react";
import Header from "../Header/Header";
import WebFont from 'webfontloader'


export default function Layout({ children, logged }) {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Oswald']
            }
        })
    }, []);

    return (
        <>
            <Header logged={logged} />
            {children}
        </>
    )
}
