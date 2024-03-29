// import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav_menu">
        <ul className="nav__list">
          {links.map(({name, icon, path}, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink to={path} className="nav__link">
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            )
          } )}
        </ul>
      </div>

      <div className="nav__toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar