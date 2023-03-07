import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';



function NavBar({showElement}) {

/* 
  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbarMenu = document.querySelector('.navbar .m-button');
    const menuBtnIcon = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      menuBtnIcon.classList.toggle('active');
    });
  }, []);
  
*/

//{showElement ? <Nav.Link href='/signinpage' className='nav-btn'>Sign in</Nav.Link> : <Card.Img class="card-avatar" src='../aboutus.svg'/>}
  return (
    <>
  
      <Navbar  sticky="top" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='../zheé.svg'
              width="200"
              height="90"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Container >
        
        < Nav  activeKey="/home" className="max-width" >

        < Nav.Item>
          <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1" href='/hubpage' className='nav-link'>Zheé-Hub </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" href='/blogpage'className='nav-link'>Blog</Nav.Link>
        </Nav.Item>

        <Dropdown>

        
          <Dropdown.Toggle id="dropdown-basic">
          Upload 
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item href='/submitfilepage'>Upload Tutorial </Dropdown.Item>
                <Dropdown.Item href='/submitblogpage'>Upload Blog</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>

        <Nav.Item>
        {showElement ? <Nav.Link href='/signinpage' className='nav-btn'>Sign in</Nav.Link> : <Card.Img class="card-avatar" src='../aboutus.svg'/>}
        </Nav.Item>

        <Nav.Item>
        <span className="material-symbols-outlined"> </span>
        </Nav.Item>
      </Nav>
      </Navbar>
      
    </>
  );
}

export default NavBar;