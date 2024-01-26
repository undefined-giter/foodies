import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import classes from './header.module.css'
import NavLink from './nav-link'

export default function Header() {

    return <header className={classes.header}>
        <div className={classes.sign}>
            <Link className={classes.logo} href='/'>
                <Image src={logo} alt='Foodies logo' priority />
            </Link>
            Foodies<br />Food
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href='/meals'>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href='/community'>Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}