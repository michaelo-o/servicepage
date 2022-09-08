import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import { useState } from 'react'
import Membership from '../pages/membership'
import { motion, AnimatePresence } from 'framer-motion'



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
                    <motion.span onClick={openMem}>Become a member</motion.span>
                </div>
            </nav>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >

                {member ? (
                    <Membership closeMem={closeMem} />

                ) : null
                }

            </AnimatePresence>

        </>
    );
}

export default Navbar;