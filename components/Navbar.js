import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import { useState } from 'react'


const Navbar = () => {

    const [member, setmember] = useState(false)

    const openMem = () => {
        setmember(true)
    }

    const closeMem = () => {
        setmember(false)
    }

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
                    <span onClick={openMem}>Become a member</span>
                </div>
            </nav>







            {member ? (
                <div className={styles.memberModal}>
                    <div className={styles.closeSection}>
                        <button onClick={closeMem} className={styles.xbutton}><Image src="/whiteClose.svg" width={48} height={48} alt="close" /></button>
                    </div>
                    <div className={styles.contentSection}>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt dicta, labore esse aspernatur reprehenderit h voluptatem, ullam quis officia maiores fugiat minus odit cumque dolorem non ut suscipit laboriosam. Delectus?</h2>
                    </div>
                </div>
            ) : null
            }

        </>
    );
}

export default Navbar;