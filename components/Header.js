import Link from 'next/link';
import "../assets/scss/Header.scss";
import { Button } from '@material-ui/core';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'


const logo = {
 
  border: 0,
  color: 'white',
  height: 28,
  padding: '30px',

};

const Header = () => (
  
    <div className="Header">
      <div >
        <Link href="/">
          <Button style={logo}>Petr Kocian</Button>
        </Link>
      </div>
      <div className="rightlinks">
        <Link href="/bio">
        <Button>Bio</Button>
        </Link>
        <Link href="/contact">
        <Button>Get in touch</Button>
        </Link>
      </div>
    </div>
)
useEffect(() => {
  hotjar.initialize(3082663, 6)
}, [])
export default Header;
