import React from 'react';
//images
import Logo from '../assets/logo-4.png'

//imort link 

import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-4'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* {logo} */}
        <a href='#'>
          <img src={Logo} alt=''/>
        </a>
        {/* {button} */}
        <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}> 

          <button className='btn btn-sm'>contact</button>
        </Link>
      </div>
    </div>
          </header>;
};

export default Header;
