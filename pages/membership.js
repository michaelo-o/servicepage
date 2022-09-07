import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/membership.module.css'
import { useState } from 'react'

const Membership = (props) => {

    const closeMem = props.closeMem

    return (
        <>
            <div className={styles.memberModal}>
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
            </div>

        </>
    );
}

export default Membership;