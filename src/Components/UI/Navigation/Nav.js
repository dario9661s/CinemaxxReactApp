import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import Logo from '../../Logo/Logo';
// import { connect } from 'react-redux';
import NavHamburger from './NavigationHamburger/NavigationHamburger';
import NavDrawer from "./NavDrawer/NavDrawer"
import Backdrop from '../Backdrop/Backdrop';
import Logo from "../../../assets/cinemax.png"
import Search from "../../Search/Search";

const Nav = (props) => {

    const [navDrawer, setNavDrawer] = useState(false);

    const navDrawerHandler = () => {
        setNavDrawer(!navDrawer);
    }
    const scrollHandler = () => {
        window.scrollTo({top: 600, behavior: 'smooth'})
    }

    return (
        <div className='NavContainer'>
            <Backdrop showDrawer={navDrawer} close={navDrawerHandler}/>
            <NavDrawer show={navDrawer} close={navDrawerHandler}/>
            <div className='LogoDiv'>
                <NavHamburger className='NavBarMenuIcon' show={navDrawerHandler} change={navDrawer}/>
                <img src = {Logo} className='NavBarLogo' alt = "navLogo"/>
            </div>
            <div className='NavItemDiv'>
                <div className='NavLeftDiv'>
                <NavLink onClick={scrollHandler} to='/' className='NavLi' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #F40135'}}>Top</NavLink>
                  <NavLink onClick={scrollHandler} to='/popular' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #F40135'}} className='NavLi'>Popular</NavLink>
                  <NavLink onClick={scrollHandler} to='/upcoming' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #F40135'}} className='NavLi'>Upcoming</NavLink>
                </div>
                  
                  
                     
                        <div className='NavRightDiv'>
                    
                            
                  <Search/>

                        </div>
                  
            </div>
        </div>
    )
}


export default Nav;