'use client'

import styles from "../css/mobile.module.css";
import Tooltip from "../components/tooltip";

export default function Mobile() {
    return (
        <main className={styles.container}>
            <section className={styles.screen}>

                {/* Tooltip dynamic component */}

                <Tooltip />

                <div className={styles.buttonContainer}>
                <button className={styles.buttons} onClick={()=>{console.log("Hi !")}}>Button 1</button>
                <button className={styles.buttons}>Button 2</button>
                </div>
                <button className={styles.buttons}>Button 3</button>
                <div className={styles.buttonContainer}>
                <button className={styles.buttons}>Button 4</button>
                <button className={styles.buttons}>Button 5</button>
                </div>
            </section>
        </main>
    );
}