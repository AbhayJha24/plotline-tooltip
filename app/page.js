'use client'

import styles from "./css/main.module.css";
import SettingForm from "./components/settingform";
import Mobile from "./components/mobile";
import { useState } from "react";

export default () => {

    const [toolTip, setToolTip] = useState({tooltiptext: "Tooltip text goes here", button: "Button 3", textsize: 16, padding: 10, textcolour: "", bgcolour: "", cradius: 0, tooltipwidth: 190,  arrowwidth: 1, arrowheight: 1});

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
        if(e.target.value > -1 && e.target.value < 76){
            let padding = {padding : parseInt(e.target.value)};
            setToolTip({...toolTip , ...padding});
        }
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
        if(e.target.value > 0 && e.target.value < 26){
            let radius = {cradius : parseInt(e.target.value)};
            setToolTip({...toolTip , ...radius});
        }
    }

    function onTooltipWidthChange(e){
        if(e.target.value > 70 && e.target.value < 270){
            let width = {tooltipwidth : parseInt(e.target.value)};
            setToolTip({...toolTip , ...width});
        }
    }

    function onArrowWidthChange(e){
        if(e.target.value > 0 && e.target.value < 9){
            let awidth = {arrowwidth : parseInt(e.target.value)};
            setToolTip({...toolTip , ...awidth});
        }
    }

    function onArrowHeightChange(e){
        if(e.target.value > 0 && e.target.value < 5){
            let aheight = {arrowheight : parseInt(e.target.value)};
            setToolTip({...toolTip , ...aheight});
        }
    }

    return (
        <main className={styles.main}>
            <SettingForm  toolTip={toolTip} TextChange={onTextChange} ButtonChange={onButtonChange} TextSizeChange={onTextSizeChange} PaddingChange={onPaddingChange} TextColourChange={onTextColourChange} BgcolourChange={onBgcolourChange} CradiusChange={onCradiusChange} TooltipWidthChange={onTooltipWidthChange} ArrowWidthChange={onArrowWidthChange} ArrowHeightChange={onArrowHeightChange} />
            <Mobile toolTip={toolTip} />
        </main>
    );
}