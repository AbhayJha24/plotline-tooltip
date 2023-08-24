'use client'

import styles from "./css/main.module.css";
import SettingForm from "./components/settingform";
import Mobile from "./components/mobile";
import { useState } from "react";

export default () => {

    const [toolTip, setToolTip] = useState({tooltiptext: "Tooltip text goes here", button: "Button 3", textsize: 16, padding: 10, textcolour: "", bgcolour: "", cradius: 0, tooltipwidth: 190,  arrowwidth: 10, arrowheight: 0});

    function onTextChange(e){
        let text = {tooltiptext : e.target.value};
        setToolTip({...toolTip , ...text});
    }

    function onButtonChange(e){
        let btn = {button : e.target.value};
        setToolTip({...toolTip , ...btn});
    }

    function onTextSizeChange(e){
        let size = {textsize : parseInt(e.target.value)};
        setToolTip({...toolTip , ...size});
    }

    function onPaddingChange(e){
        let padding = {padding : parseInt(e.target.value)};
        setToolTip({...toolTip , ...padding});
    }

    function onTextColourChange(e){
        let colour = {textcolour : e.target.value};
        setToolTip({...toolTip , ...colour});
    }

    function onBgcolourChange(e){
        let colour = {bgcolour : e.target.value};
        setToolTip({...toolTip , ...colour});
    }

    function onCradiusChange(e){
        let radius = {cradius : parseInt(e.target.value)};
        setToolTip({...toolTip , ...radius});
    }

    function onTooltipWidthChange(e){
        let width = {tooltipwidth : parseInt(e.target.value)};
        setToolTip({...toolTip , ...width});
    }

    function onArrowWidthChange(e){
        let awidth = {arrowwidth : parseInt(e.target.value)};
        setToolTip({...toolTip , ...awidth});
    }

    function onArrowHeightChange(e){
        let aheight = {arrowheight : parseInt(e.target.value)};
        setToolTip({...toolTip , ...aheight});
    }

    return (
        <main className={styles.main}>
            <SettingForm  toolTip={toolTip} TextChange={onTextChange} ButtonChange={onButtonChange} TextSizeChange={onTextSizeChange} PaddingChange={onPaddingChange} TextColourChange={onTextColourChange} BgcolourChange={onBgcolourChange} CradiusChange={onCradiusChange} TooltipWidthChange={onTooltipWidthChange} ArrowWidthChange={onArrowWidthChange} ArrowHeightChange={onArrowHeightChange} />
            <Mobile toolTip={toolTip} />
        </main>
    );
}