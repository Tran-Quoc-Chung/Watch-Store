import React from 'react'
import styles from './content.module.css'
function Content() {
    return (
        <div className={styles.container}>
            <div className={` ${styles.text}`} >
                <div className={styles.background1}></div>
                <div className={styles.textcontent}>
                    <h1>Romance <br /> &nbsp; in the air</h1>
                    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;WEAR YOUR STYLE WITH VERVE & ATTITUDE</h2>
                    <button>details</button>
                </div>
            </div>
            <div className={` ${styles.text} ${styles.content2}`}>
            <div className={styles.background2}></div>
            <div className={styles.textcontent}>
                    <h1>Analog & <br /> &nbsp;  &nbsp; &nbsp;  Digital</h1>
                    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SMART WATCHES LATEST FASHION STATEMENT</h2>
                    <button>details</button>
                </div>
            </div>
        </div>
    )
}

export default Content
