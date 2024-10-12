import React from 'react'

import Login from '../components/account/Login'

const Account = () => {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#login"
            aria-selected="false"
            role="tab"
            tabIndex="-1"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#register"
            aria-selected="true"
            role="tab"
          >
            Register
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade active show" id="login" role="tabpanel">
          <Login />
        </div>
        <div className="tab-pane fade" id="register" role="tabpanel">
          <p>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
            single-origin coffee squid. Exercitation +1 labore velit, blog
            sartorial PBR leggings next level wes anderson artisan four loko
            farm-to-table craft beer twee. Qui photo booth letterpress, commodo
            enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
            PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
            mollit.
          </p>
        </div>
      </div>
    </>
  )
}

export default Account
