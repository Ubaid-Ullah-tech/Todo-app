import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink  to='/'  className="navbar-brand">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  to='/'  className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to='/About'  className="nav-link">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
