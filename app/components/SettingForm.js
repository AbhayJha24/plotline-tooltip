"use-client"

import styles from "../css/form.module.css";

export default function SettingForm() {
    return (
        <main className={styles.form}>
            <h1 className={styles.headings}>Target Element</h1>
            <select name="" id="" className={styles.field1}>
                <option value="Button 1">Button 1</option>
                <option value="Button 2">Button 2</option>
                <option value="Button 3">Button 3</option>
                <option value="Button 4">Button 4</option>
                <option value="Button 5">Button 5</option>
            </select>
            <h1 className={styles.headings}>Tooltip text</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field1} />
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Text Size</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field1} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Padding</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field1} />
                </div>
            </section>
            <h1 className={styles.headings}>Text Colour</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field1} />
            <h1 className={styles.headings}>Background colour</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field1} />
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Corner radius</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field1} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Tooltip width</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field1} />
                </div>
            </section>
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Arrow width</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field1} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Arrow height</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field1} />
                </div>
            </section>
        </main>
    );
}