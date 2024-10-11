import React from 'react'

const Account = () => {
  return (
    <>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            href="#login"
            aria-selected="false"
            role="tab"
            tabindex="-1"
          >
            Login
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            href="#register"
            aria-selected="true"
            role="tab"
          >
            Register
          </a>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade" id="login" role="tabpanel">
          <p>
            Raw denim you probably haven't heard of them jean shorts Austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher
            voluptate nisi qui.
          </p>
        </div>
        <div class="tab-pane fade active show" id="register" role="tabpanel">
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
