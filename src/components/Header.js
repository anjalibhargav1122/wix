import React from 'react'
import Container from 'react-bootstrap/Container';
import logo from "../assets/logo.png"
import "./Components.css"


const Header = () => {
  return (
    <div>
      <Container fluid className='shadow-sm pb-2'>
        <Container>
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src={logo} /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                </ul>
                <div class="d-flex">
                  <a className='text-decoration-none text-dark me-4 ff' href='/template'>Templates</a>
                  <a className='text-decoration-none text-dark ff' href='/wix'>Wix.com</a>
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </Container>
    </div>
  )
}

export default Header