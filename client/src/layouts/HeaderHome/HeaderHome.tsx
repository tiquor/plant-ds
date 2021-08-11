import './HeaderHome.css';
// import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const HeaderHome = () => {
  return (
    <header className='home__container '>
      <div className='home__display w-100 p-3 h-100 d-flex flex-column flex-lg-row
        justify-content-between justify-content-lg-around align-items-center'
      >
        <section className='d-flex justify-content-between align-items-center'>
          <img className='header__logo-home me-4' src={logo} alt='Logo de la aplicación' />
          <h1 className='fs-2 letters-s-05 mx-3'>PHG Plants</h1>
        </section>
        <section className='d-none d-sm-flex pt-3 p-lg-0 w-nav-auto justify-content-evenly'>
          <NavLink to='/options' className='p-1 h-first fs-text fw-bold'>Get Started</NavLink>
          <div className='header__separate' />
          <NavLink to='/' className='p-1 h-first fs-text'>Learn</NavLink>
          <div className='header__separate' />
          <NavLink to='/' className='p-1 h-first fs-text'>Contact</NavLink>
          <div className='header__separate' />
          <NavLink to='/' className='p-1 h-first fs-text'>About Us</NavLink>
        </section>
      </div>
    </header>
  );
};

export default (HeaderHome);