import React from 'react'

export default function HeaderNavItem({ title, link }) {
    return (
        <>
            <li>{'<NavLink>'}<NavLink to={link}>{title}</NavLink>{'</NavLink>'}</li>
        </>
    )
}
