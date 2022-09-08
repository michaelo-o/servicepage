import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/membership.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Membership = (props) => {

    const closeMem = props.closeMem

    const slideIn = {
        hidden: {
            x: "100vw",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "linear",
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            x: "100vw",
            opacity: 0,
        },
    };

    return (
        <>
            <motion.div
                className={styles.memberModal}
                onClick={(e) => e.stopPropagation()}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className={styles.closeSection}>
                    <button onClick={closeMem} className={styles.xbutton}><Image src="/whiteClose.svg" width={48} height={48} alt="close" /></button>
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.ieasy}>
                        <h4>It&apos;s so easy</h4>
                        <p>A subscription is $9 per month.</p>
                    </div>
                    <div className={styles.sidemenu}>
                        <p>Home</p>
                        <p>Services</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                        <div className={styles.socialCont}>
                            <span className={styles.socialmedia}><Image src="/twitter.svg" width={33} height={35} alt="close" /></span>
                            <span className={styles.socialmedia}><Image src="/facebook.svg" width={33} height={34} alt="close" /></span>
                        </div>
                    </div>
                    <div className={styles.cardsCont}>
                        <div>
                            <h3>Subscribe for $9 per month</h3>
                            <p>This is the most popular option across our members. Join now, and cancel at any time!</p>
                            <button className={styles.cardButton}>Subscribe Now</button>
                        </div>
                        <div>
                            <h3>Pay $99 Once</h3>
                            <p>This is the most popular option across our members. Join now, and cancel at any time!</p>
                            <button className={styles.cardButton}>Pay Once</button>
                        </div>
                    </div>
                </div>
            </motion.div>

        </>
    );
}

export default Membership;