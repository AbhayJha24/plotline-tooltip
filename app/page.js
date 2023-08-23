import styles from "./css/main.module.css";
import SettingForm from "./components/settingform";
import Mobile from "./components/mobile";

export default () => {
    return (
        <main className={styles.main}>
            <SettingForm />
            <Mobile />
        </main>
    );
}