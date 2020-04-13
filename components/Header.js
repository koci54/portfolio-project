import Link from 'next/link';
import '../assets/css/styles.css'
import { Button } from '@material-ui/core'

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <Button color='primary'>Petr Kocian</Button>
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
}
