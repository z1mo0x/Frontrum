import React from 'react'

export default function HeaderNavItem({ title, link }) {
    return (
        <>
            <li>{'<NavLink>'}<NavLink to={links}>{title}</NavLink>{'</NavLink>'}</li>
        </>
    )
}
