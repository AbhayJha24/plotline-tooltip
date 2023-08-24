'use client'

import style from "../css/tooltip.module.css";

import { useRef, useEffect } from "react";

export default function Tooltip({toolTip}) {

    const tooltipelement = useRef(null);

    useEffect(() => {
      if(tooltipelement){
        tooltipelement.current.style.fontSize = `${toolTip.textsize}px`;
        tooltipelement.current.style.padding = `${toolTip.padding}px`;
        tooltipelement.current.style.color = toolTip.textcolour;
        tooltipelement.current.style.backgroundColor = toolTip.bgcolour;
        tooltipelement.current.style.borderColor = toolTip.bgcolour;
        tooltipelement.current.style.borderRadius = `${toolTip.cradius}px`;
        tooltipelement.current.style.width = `${toolTip.tooltipwidth}px`;

        if(toolTip.button === "Button 1"){
            tooltipelement.current.style.top = '4.5em';
            tooltipelement.current.style.left = '-2.2em';
        }
        else if(toolTip.button === "Button 2"){
            tooltipelement.current.style.top = '4.5em';
            tooltipelement.current.style.left = '7.5em';
        }
        else if(toolTip.button === "Button 3"){
            tooltipelement.current.style.top = '19.5em';
            tooltipelement.current.style.left = '2.6em';
        }
        else if(toolTip.button === "Button 4"){
            tooltipelement.current.style.top = '28em';
            tooltipelement.current.style.left = '-2.3em';
        }
        else if(toolTip.button === "Button 5"){
            tooltipelement.current.style.top = '28em';
            tooltipelement.current.style.left = '7.7em';
        }
      }
    }, [toolTip])
    
    
    return (
        <main className={style.tooltip} ref={tooltipelement}>
            {toolTip.tooltiptext}
        </main>
    );
}