'use client'

import styles from "../css/form.module.css";
import { useState } from "react";

export default function SettingForm() {

    const [toolTip, setToolTip] = useState({tooltiptext: "Tooltip text goes here", button: "Button 3", textsize: 0, padding: 0, textcolour: "", bgcolour: "", cradius: 0, tooltipwidth: 0,  arrowwidth: 10, arrowheight: 0});

    function onTextChange(e){
        let text = {tooltiptext : e.target.value};
        setToolTip({...toolTip , ...text});
        console.log(toolTip)
    }

    function onButtonChange(e){
        let btn = {button : e.target.value};
        setToolTip({...toolTip , ...btn});
        console.log(toolTip)
    }

    function onTextSizeChange(e){
        let size = {textsize : parseInt(e.target.value)};
        setToolTip({...toolTip , ...size});
        console.log(toolTip)
    }

    function onPaddingChange(e){
        let padding = {padding : parseInt(e.target.value)};
        setToolTip({...toolTip , ...padding});
        console.log(toolTip)
    }

    function onTextColourChange(e){
        let colour = {textcolour : e.target.value};
        setToolTip({...toolTip , ...colour});
        console.log(toolTip)
    }

    function onBgcolourChange(e){
        let colour = {bgcolour : e.target.value};
        setToolTip({...toolTip , ...colour});
        console.log(toolTip)
    }

    function onCradiusChange(e){
        let radius = {cradius : parseInt(e.target.value)};
        setToolTip({...toolTip , ...radius});
        console.log(toolTip)
    }

    function onTooltipWidthChange(e){
        let width = {tooltipwidth : parseInt(e.target.value)};
        setToolTip({...toolTip , ...width});
        console.log(toolTip)
    }

    function onArrowWidthChange(e){
        let awidth = {arrowwidth : parseInt(e.target.value)};
        setToolTip({...toolTip , ...awidth});
        console.log(toolTip)
    }

    function onArrowHeightChange(e){
        let aheight = {arrowheight : parseInt(e.target.value)};
        setToolTip({...toolTip , ...aheight});
        console.log(toolTip)
    }

    return (
        <main className={styles.form}>
            <h1 className={styles.headings}>Target Element</h1>
            <select name="" id="" className={styles.field1} value={toolTip.button} onChange={onButtonChange}>
                <option value="default">Select a button</option>
                <option value="Button 1">Button 1</option>
                <option value="Button 2">Button 2</option>
                <option value="Button 3">Button 3</option>
                <option value="Button 4">Button 4</option>
                <option value="Button 5">Button 5</option>
            </select>
            <h1 className={styles.headings}>Tooltip text</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.tooltiptext} onChange={onTextChange} />
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Text Size</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.textsize} onChange={onTextSizeChange} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Padding</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.padding} onChange={onPaddingChange} />
                </div>
            </section>
            <h1 className={styles.headings}>Text Colour</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.textcolour} onChange={onTextColourChange} />
            <h1 className={styles.headings}>Background colour</h1>
            <input type="text" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.bgcolour} onChange={onBgcolourChange} />
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Corner radius</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2}  value={toolTip.cradius} onChange={onCradiusChange} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Tooltip width</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.tooltipwidth} onChange={onTooltipWidthChange} />
                </div>
            </section>
            <section className={styles.twoInput}>
                <div className={styles.box}>
                <h1 className={styles.headings}>Arrow width</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.arrowwidth} onChange={onArrowWidthChange} />
                </div>
                <div className={styles.box}>
                <h1 className={styles.headings}>Arrow height</h1>
                <input type="number" name="" id="" placeholder="Input" className={styles.field2} value={toolTip.arrowheight} onChange={onArrowHeightChange} />
                </div>
            </section>
        </main>
    );
}