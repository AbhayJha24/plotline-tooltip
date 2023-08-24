'use client'

import styles from "./css/main.module.css";
import SettingForm from "./components/settingform";
import Mobile from "./components/mobile";
import { useState } from "react";

export default () => {

    return (
        <main className={styles.main}>
            <SettingForm  />
            <Mobile />
        </main>
    );
}