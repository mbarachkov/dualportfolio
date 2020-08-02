import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navStyle' color="black" light expand="md">
        <NavbarBrand href="/home">Daffles </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Visual HTML</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/HIW">how it works</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/tokens">tokens</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem>
                  <NavLink href="/">past daffles</NavLink>
                </DropdownItem>
                <DropdownItem divider /> */}
                <DropdownItem>
                  <NavLink href="/contact">contact</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <NavLink href="/VisualHTML">current daffle</NavLink>
            </NavItem> */}
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;