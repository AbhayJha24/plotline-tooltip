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
      }
    }, [toolTip])
    
    
    return (
        <main className={style.tooltip} ref={tooltipelement}>
            {toolTip.tooltiptext}
        </main>
    );
}