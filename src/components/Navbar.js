import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='header'>
      <Link to='/'><h1>CHINESE PLATFORM 2.0</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link  to='/'>Home</Link>
            </li>
            <li>
                <Link  to='/course'>Course</Link>
            </li>
            <li>
                <Link  to='/signin'>Sign in</Link>
            </li>
            <li>
                <Link  to='/createaccount'><button className='btn'>Create Account</button></Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: 'black'}}/>) : <FaBars size={20} style={{color: 'black'}}/>}
            
        </div>
    </div>
  )
}

export default Navbar
