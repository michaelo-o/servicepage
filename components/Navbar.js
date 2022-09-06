import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'


const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.leftnav}>
                    <span>awesomeservice</span>
                </div>
                <div className={styles.rightnav}>
                    <span>Home</span>
                    <span>Services</span>
                    <span>FAQ</span>
                    <span>Become a member</span>
                </div>
            </nav>









        </>
    );
}

export default Navbar;