'use client'

import styles from "./css/main.module.css";
import SettingForm from "./components/settingform";
import Mobile from "./components/mobile";
import { useState } from "react";

export default () => {

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
        <main className={styles.main}>
            <SettingForm  toolTip={toolTip} TextChange={onTextChange} ButtonChange={onButtonChange} TextSizeChange={onTextSizeChange} PaddingChange={onPaddingChange} TextColourChange={onTextColourChange} BgcolourChange={onBgcolourChange} CradiusChange={onCradiusChange} TooltipWidthChange={onTooltipWidthChange} ArrowWidthChange={onArrowWidthChange} ArrowHeightChange={onArrowHeightChange} />
            <Mobile />
        </main>
    );
}