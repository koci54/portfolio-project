import Link from 'next/link';
import "../assets/scss/Header.scss";
import { Button } from '@material-ui/core'

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
        <Link href="/about">
        <Button>About</Button>
        </Link>
        <Link href="/contact">
        <Button>Contact me</Button>
        </Link>
      </div>
    </div>
)

export default Header;
