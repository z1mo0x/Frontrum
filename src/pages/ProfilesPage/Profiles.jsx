import { NavLink, Outlet } from "react-router-dom"

export default function Profiles() {

    const profiles = [1, 2, 3, 4, 5]

    return (
        <>
            {
                profiles.map((profile) => {
                    return (
                        <NavLink key={profile} to={`/profiles/${profile}`}
                            className={({ isActive }) => { return isActive ? 'Active' : '' }} > Profile {profile}</NavLink >
                    )
                })
            }
            <Outlet />
        </>
    )
}
