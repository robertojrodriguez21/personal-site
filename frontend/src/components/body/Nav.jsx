import React from 'react'

const Nav = () => {
  return (
    <nav>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Roberto J. Rodriguez
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Recruiters
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Login
                  </a>
                  <a class="dropdown-item" href="#">
                    Register
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hello NAME!
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Blog Activity
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Account Settings
                  </a>
                  <a class="dropdown-item" href="#">
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
