import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./Navbar";


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>
                    Aadhar
                </h1>
            </NavLink>
            <NavBtn>
                  <NavBtnLink to='/signin'>Sign in as Landlord</NavBtnLink>  
            </NavBtn>

        </Nav>

        </>
    );
};

export default Navbar
