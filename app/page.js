import styles from "./css/main.module.css";
import SettingForm from "./components/SettingForm";

export default () => {
    return (
        <main className={styles.main}>
            <SettingForm />
        </main>
    );
}