import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            Roberto J. Rodriguez
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/projects'}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/recruiters'}>
                  Recruiters
                </Link>
              </li>
            </ul>
            <ul className="d-flex navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/account'}>
                  Login/Register
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hello NAME!
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to={'/activity'}>
                    Blog Activity
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to={'/myaccount'}>
                    My Account
                  </Link>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  )
}

export default Nav
