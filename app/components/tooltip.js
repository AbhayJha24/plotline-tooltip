'use client'

import style from "../css/tooltip.module.css";

import { useRef, useEffect } from "react";

export default function Tooltip({toolTip}) {

    const tooltipelement = useRef(null);
    const beakelement = useRef(null);

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
            tooltipelement.current.style.top = '70px';
            tooltipelement.current.style.left = '-35px';
            tooltipelement.current.style.transform = 'rotateZ(0deg)';
        }
        else if(toolTip.button === "Button 2"){
            tooltipelement.current.style.top = '70px';
            tooltipelement.current.style.left = '122px';
            tooltipelement.current.style.transform = 'rotateZ(0deg)';
        }
        else if(toolTip.button === "Button 3"){
            tooltipelement.current.style.top = '315px';
            tooltipelement.current.style.left = '42px';
            tooltipelement.current.style.transform = 'rotateZ(0deg)';
        }
        else if(toolTip.button === "Button 4"){
            tooltipelement.current.style.top = '450px';
            tooltipelement.current.style.left = '-37px';
            tooltipelement.current.style.transform = 'rotateZ(180deg)';
        }
        else if(toolTip.button === "Button 5"){
            tooltipelement.current.style.top = '450px';
            tooltipelement.current.style.left = '121px';
            tooltipelement.current.style.transform = 'rotateZ(180deg)';
        }
      }

      if(beakelement){
        beakelement.current.style.transform = `scaleX(${toolTip.arrowwidth})`;
        if(toolTip.bgcolour !== ""){
            beakelement.current.style.borderColor = `transparent transparent ${toolTip.bgcolour} transparent`;
        }
        else{
            beakelement.current.style.borderColor = `transparent transparent #212121 transparent`;
        }
      }
    }, [toolTip])
    
    
    return (
        <main className={style.tooltip} ref={tooltipelement}>
            <div className={style.beak} ref={beakelement}></div>
            <p className={style.text}>{toolTip.tooltiptext}</p>
        </main>
    );
}