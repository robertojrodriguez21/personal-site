import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <ul className="navbar-nav me-auto row justify-content-center">
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
        </div>
      </div>
    </>
  )
}

export default Footer
