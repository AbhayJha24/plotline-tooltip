'use client'

import styles from "../css/form.module.css";

export default function SettingForm({toolTip, TextChange, ButtonChange, TextSizeChange, PaddingChange, TextColourChange, BgcolourChange, CradiusChange, TooltipWidthChange, ArrowWidthChange, ArrowHeightChange}) {

    return (
        <main className={styles.form}>
            <h1 className={styles.headings}>Target Element</h1>
            <select name="" id="" className={styles.field1} value={toolTip.button} onChange={ButtonChange}>
                <option value="default">Select a button</option>
                <option value="Button 1">Button 1</option>
                <option value="Button 2">Button 2</option>
                <option value="Button 3">Button 3</option>
                <option value="Button 4">Button 4</option>
                <option value="Button 5">Button 5</option>
            </select>
            <h1 className={styles.headings}>Tooltip text</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.tooltiptext} onChange={TextChange} />
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Text Size</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.textsize} onChange={TextSizeChange} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Padding</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.padding} onChange={PaddingChange} />
                </div>
            </section>
            <h1 className={styles.headings}>Text Colour</h1>
            <input type="text" name="" id="" placeholder="Eg: blue or #ff0000" className={styles.field2} value={toolTip.textcolour} onChange={TextColourChange} />
            <h1 className={styles.headings}>Background colour</h1>
            <input type="text" name="" id="" placeholder="Eg: blue or #ff0000" className={styles.field2} value={toolTip.bgcolour} onChange={BgcolourChange} />
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Corner radius</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2}  value={toolTip.cradius} onChange={CradiusChange} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Tooltip width</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.tooltipwidth} onChange={TooltipWidthChange} />
                </div>
            </section>
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Arrow width</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.arrowwidth} onChange={ArrowWidthChange} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Arrow height</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.arrowheight} onChange={ArrowHeightChange} />
                </div>
            </section>
        </main>
    );
}