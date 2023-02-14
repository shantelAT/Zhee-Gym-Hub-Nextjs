import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect } from 'react';



function NavBar() {

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
  return (
    <>
  
      <Navbar   class="navbar">
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
        < Nav  activeKey="/home" class="max-width" >

        < Nav.Item>
          <Nav.Link href="/home" className='nav-link'>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1" className='nav-link'>Zheé-Hub </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" className='nav-link'>Store</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link   className='nav-link'>Dieting</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-btn'>Sign in</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <span class="material-symbols-outlined"> shopping_cart_checkout</span>
        </Nav.Item>
      </Nav>
      </Navbar>
      
    </>
  );
}

export default NavBar;