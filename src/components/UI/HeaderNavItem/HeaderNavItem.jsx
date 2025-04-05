import React from 'react'
import { NavLink } from "react-router-dom";

export default function HeaderNavItem({ title, link }) {
    return (
        <>
            <li>{'<NavLink> '}<NavLink to={link}>{title}</NavLink>{' </NavLink>'}</li>
        </>
    )
}
