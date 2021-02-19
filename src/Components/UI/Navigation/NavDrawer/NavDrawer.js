import React from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Logo from '../../../Logo/Logo';
import './NavDrawer.css';


const navDrawer = (props) => {

    let style = {
        transform: props.show ? 'translateX(0)' : 'translateX(-101%)'
    }

    let activeStyle = {
        transform: 'scale(1.1)', 
        borderBottom: '2px solid #E95035',
        margin: '10px 0 10px 20px',
        width: '50%'
    }

    return (
        <div className='NavDrawerContainer' style={style}>
            {/* <Logo className='NavDrawerLogo'/> */}
            <div className='NavDrawerContent'>
                <div className='NavDrawerContentPages'>
                <NavLink  to='/' className='NavDrawerLi' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #F40135'}}>Top</NavLink>
                  <NavLink  to='/popular' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #F40135'}} className='NavDrawerLi'>Popular</NavLink>
                  <NavLink  to='/upcoming' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #F40135'}} className='NavDrawerLi'>Upcoming</NavLink>                </div>
                <div className='NavDrawerContentAuth'>
                    {
                        props.isAuth ?
                            <NavLink to='/logout' exact activeStyle={activeStyle} className='NavDrawerIsAuth' style={{paddingRight: '10px'}} onClick={props.close}><i className="fas fa-sign-out-alt"></i> Logout</NavLink>
                        :
                        <div className='NavDrawerIsNotAuth' onClick={props.close}>
                           
                        </div>
                    }
                </div>
            </div>
        </div>
    )
} 


// const mapStateToProps = state => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }


export default navDrawer;