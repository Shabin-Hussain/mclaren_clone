import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';




function Header() {
  return (
    <>
      <div className='' style={{ height: '150px' }}>
         <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10  border-bottom" style={{ height: '75px' }}>
            <div className="row">
              <div className="col-md-3">
                <img src="/McLaren-Logo.png" alt="logo" height={'70px'} width={'200px'} />
              </div>
              <div className="col-md-2 d-flex mt-4">
                <FontAwesomeIcon icon={faGlobe} color='white' className='bg-black p-1 me-1' />
                <h6>GLOBAL</h6>
                <FontAwesomeIcon icon={faArrowUp} />

              </div>
              <div className="col-md-3"></div>
              <div className="col-md-4 text-end mt-4">
                <span className='text-secondary'> McLAREN.COM / AUTOMOTIVE</span> <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div> 
        <div className="row  nav_bot">
          <Navbar expand="lg" className="bg-white d-flex ">
            <Container>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100">
                  
                  <NavDropdown title="MODELS" id="basic-nav-dropdown" className='ms-3'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="MSO" id="basic-nav-dropdown" className='ms-4'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="OWNERSHIP" id="basic-nav-dropdown" className='ms-4'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="EXPERIENCES" id="basic-nav-dropdown" className='ms-4'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ABOUT" id="basic-nav-dropdown" className='ms-4'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="PRE-OWNED" id="basic-nav-dropdown" className='ms-4'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <button variant="primary" className='btn1 px-4 ms-auto text-white'><FontAwesomeIcon icon={faLocationDot} />FIND A RETAILER</button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  )
}

export default Header