'use client'

import styles from "./css/main.module.css";
import SettingForm from "./components/settingform";
import Mobile from "./components/mobile";
import { useState, useEffect } from "react";

export default () => {

    const [toolTip, setToolTip] = useState({tooltiptext: "Tooltip text goes here", button: "Button 3", textsize: 16, padding: 10, textcolour: "", bgcolour: "", cradius: 0, tooltipwidth: 190,  arrowwidth: 1, arrowheight: 1});

    useEffect(() => {
      if ((toolTip.textsize > (toolTip.tooltipwidth*(18/70))) || toolTip.textsize >= 30) {
        let usize = {textsize: 0};
        if((toolTip.tooltipwidth*(18/70)) < 30){
            if((toolTip.tooltipwidth*(18/70)) > 0){
                usize ={textsize : (toolTip.tooltipwidth*(18/70))};
            }
            else{
                usize ={textsize : 1};
            }
        }
        else{
            usize ={textsize : 30}
        }
        setToolTip({...toolTip, ...usize});
      }

      if(toolTip.arrowwidth > toolTip.tooltipwidth*(3/230)){
        let rcaw = {arrowwidth: toolTip.tooltipwidth*(3/230)};
        if(toolTip.tooltipwidth*(3/230) > 0){
            rcaw = {arrowwidth: toolTip.tooltipwidth*(3/230)};
        }
        else{
            rcaw = {arrowwidth: 1};
        }
        setToolTip({...toolTip, ...rcaw});
      }

      if(toolTip.textsize === 0){
        let rcts = {textsize: 1};
        setToolTip({...toolTip, ...rcts});
      }

      if(toolTip.arrowwidth === 0){
        let rcaw = {arrowwidth: 1};
        setToolTip({...toolTip, ...rcaw});
      }
    }, [toolTip])
    

    function onTextChange(e){
        let text = {tooltiptext : (e.target.value).substr(0,25)};
        setToolTip({...toolTip , ...text});
    }

    function onButtonChange(e){
        let btn = {button : e.target.value};
        setToolTip({...toolTip , ...btn});
    }

    function onTextSizeChange(e){
        if((e.target.value > (toolTip.tooltipwidth*(9/115)) && e.target.value < (toolTip.tooltipwidth*(18/70))) || e.target.value < 30){
            let size = {textsize : parseInt(e.target.value)};
            setToolTip({...toolTip , ...size});
        }
    }

    function onPaddingChange(e){
        if(e.target.value > -1 && e.target.value < 25){
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
        if(e.target.value > 70 && e.target.value < 231){
            let width = {tooltipwidth : parseInt(e.target.value)};
            setToolTip({...toolTip , ...width});
        }
    }

    function onArrowWidthChange(e){
        if(e.target.value > 0 && e.target.value < toolTip.tooltipwidth*(3/230)){
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