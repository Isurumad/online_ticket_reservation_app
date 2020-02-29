import React , { useState }from 'react'
// import {NavLink} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonToggle
  } from 'reactstrap';
  import '../css/header.css'
  


const Header =(props)=>{
    const [isOpen] = useState(false);
    
    return(
        <div>
            <Navbar color='dark' light expand='md'>
                <NavbarBrand className='main-header'><p>Travel SriLanka</p></NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto"  navbar id='nav-box'>
                        <NavItem>
                            <NavLink id='nav-items' href="/" className='link' activeClassName='is-active' exact={true}>HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id='nav-items' href="/contactus" className='link' activeClassName='is-active'>CONTACT US</NavLink>
                        </NavItem> 
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret id='nav-items'>
                                SERVICES
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                                HOTELS
                        </DropdownItem>
                        <DropdownItem>
                                TAXI SERVICES
                        </DropdownItem>
                        <DropdownItem>
                                GUID SERVICES
                        </DropdownItem>
                        <DropdownItem>
                                OTHER
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href='/advertistments'>
                            ALL SERVICES
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            <NavItem>
                <NavLink id='nav-items' href="/signin" className='link' activeClassName='is-active' >SIGN IN</NavLink>
            </NavItem>
            <NavItem>
                <NavLink id='nav-items'href="/signup" className='link' activeClassName='is-active'>SIGN UP</NavLink>
            </NavItem>
            
          </Nav>
          <ButtonToggle href='/schedules' color="success">BOOK TICKETS</ButtonToggle>
          <ButtonToggle color="success">POST ADVERTISTMENT</ButtonToggle>

        </Collapse>

            </Navbar>
        </div>        
    );
}
// Header.defaultProps={
//     title:'TRAVEL SRI LANKA',
//     description:'Online Train Ticket Reservation System'
// }

export default Header
