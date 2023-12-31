'use client'

import style from "../css/tooltip.module.css";

import { useRef, useEffect } from "react";

export default function Tooltip({toolTip}) {

    const tooltipelement = useRef(null);
    const beakelement = useRef(null);

    // Use Effect Functionality to render the updated tooltip component in realtime

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
            tooltipelement.current.style.bottom = 'initial';
            tooltipelement.current.style.left = '22px';
            tooltipelement.current.style.right = 'initial';
            tooltipelement.current.style.margin = 'initial';
            tooltipelement.current.style.transform = 'rotateZ(0deg)';
            if(beakelement){
                beakelement.current.style.left = '28px';
                beakelement.current.style.right = 'initial';
            }
        }
        else if(toolTip.button === "Button 2"){
            tooltipelement.current.style.top = '70px';
            tooltipelement.current.style.bottom = 'initial';
            tooltipelement.current.style.left = 'initial';
            tooltipelement.current.style.right = '22px';
            tooltipelement.current.style.margin = 'initial';
            tooltipelement.current.style.transform = 'rotateZ(0deg)';
            if(beakelement){
                beakelement.current.style.left = 'initial';
                beakelement.current.style.right = '28px';
            }
        }
        else if(toolTip.button === "Button 3"){
            tooltipelement.current.style.top = '315px';
            tooltipelement.current.style.bottom = 'initial';
            tooltipelement.current.style.left = '0px';
            tooltipelement.current.style.right = '0px';
            tooltipelement.current.style.margin = 'auto';
            tooltipelement.current.style.transform = 'rotateZ(0deg)';
            if(beakelement){
                beakelement.current.style.left = 'initial';
                beakelement.current.style.right = 'initial';
            }
        }
        else if(toolTip.button === "Button 4"){
            tooltipelement.current.style.top = 'initial';
            tooltipelement.current.style.bottom = '70px';
            tooltipelement.current.style.left = '22px';
            tooltipelement.current.style.right = 'initial';
            tooltipelement.current.style.margin = 'initial';
            tooltipelement.current.style.transform = 'rotateZ(180deg)';
            if(beakelement){
                beakelement.current.style.left = 'initial';
                beakelement.current.style.right = '28px';
            }
        }
        else if(toolTip.button === "Button 5"){
            tooltipelement.current.style.top = 'initial';
            tooltipelement.current.style.bottom = '70px';
            tooltipelement.current.style.left = 'initial';
            tooltipelement.current.style.right = '22px';
            tooltipelement.current.style.margin = 'initial';
            tooltipelement.current.style.transform = 'rotateZ(180deg)';
            if(beakelement){
                beakelement.current.style.left = '28px';
                beakelement.current.style.right = 'initial';
            }
        }
      }

      if(beakelement){
        beakelement.current.style.transform = `scale(${toolTip.arrowwidth/10},${toolTip.arrowheight/10})`;
        beakelement.current.style.top = `${-20-((toolTip.arrowheight-10))}px`;
        if(toolTip.bgcolour !== ""){
            beakelement.current.style.borderColor = `transparent transparent ${toolTip.bgcolour} transparent`;
        }
        else{
            beakelement.current.style.borderColor = `transparent transparent #212121 transparent`;
        }
      }
    }, [toolTip])

    // Tooltip Component JSX
    
    return (
        <main className={style.tooltip} ref={tooltipelement}>
            <div className={style.beak} ref={beakelement}></div>
            <p className={style.text}>{toolTip.tooltiptext}</p>
        </main>
    );
}