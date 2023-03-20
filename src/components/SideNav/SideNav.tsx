import React from 'react'
import "./SideNav.css"
import { Link, useLocation, NavLink, Outlet } from "react-router-dom"

function SideNav() {

    const slug = useLocation();

    return (
        <div className="SideNav">
            <nav>
                <NavLink to="/habits" className='SideNav-list-items'>Habits</NavLink>
                <NavLink to="/accomplishments" className='SideNav-list-items'>Accomplishments</NavLink>
                <NavLink to="/elements" className='SideNav-list-items'>Elements</NavLink>

            </nav>
            <main>
                <Outlet />
            </main>

            {/* <Link to="/habits" className={`SideNav-list-items ${slug.pathname === "/habits" && "SideNav-list-items--active"}`}>Habit</Link>
            <Link to="/accomplishments" className={`SideNav-list-items ${slug.pathname === "/accomplishments" && "SideNav-list-items--active"}`}>Accomplishments</Link>
            <Link to="/elements" className={`SideNav-list-items ${slug.pathname === "/elements" && "SideNav-list-items--active"}`}>Elements</Link> */}
        </div>
    )
}

export default SideNav
