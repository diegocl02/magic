import React, { Component } from 'react'
import r from '../img/colors/R.svg'
import g from '../img/colors/G.svg'
import b from '../img/colors/B.svg'
import u from '../img/colors/U.svg'
import w from '../img/colors/W.svg'


export const animatedLogo = () => {
    const size = "26vh"
    const halfSize = "13vh"
    const circleContainer = {
        position: "relative",
        width: size,
        height: size,
        padding: "2.8em",
        /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
        // border: "dashed 1px",
        borderRadius: "50%",
        // margin: "1.75em auto 0",
    }
    const elementsCircled = {
        display: "block",
        position: "absolute",
        top: "50%", left: "50%",
        width: "7vh", height: "7vh",
        margin: "-2vh",
    }
    const img = { display: "block", width: "100%" }

    return <div style={circleContainer}>
        <div style={{ ...elementsCircled, transform: `rotate(270deg) translate(${halfSize}) rotate(-270deg)` }}>
            <img style ={img} src={r} />
        </div>
        <div style={{ ...elementsCircled, transform: `rotate(342deg) translate(${halfSize}) rotate(-342deg)` }}>
            <img style ={img} src={g} />
        </div>
        <div style={{ ...elementsCircled, transform: `rotate(54deg) translate(${halfSize}) rotate(-54deg)` }}>
            <img style ={img} src={b} />
        </div>
        <div style={{ ...elementsCircled, transform: `rotate(126deg) translate(${halfSize}) rotate(-126deg)` }}>
            <img style ={img} src={u} />
        </div>
        <div style={{ ...elementsCircled, transform: `rotate(198deg) translate(${halfSize}) rotate(-198deg)` }}>
            <img style ={img} src={w} />
        </div>
    </div>


    // .deg0 { transform: translate(12em); } /* 12em = half the width of the wrapper */
    // .deg45 { transform: rotate(45deg) translate(12em) rotate(-45deg); }
    // .deg135 { transform: rotate(135deg) translate(12em) rotate(-135deg); }
    // .deg180 { transform: translate(-12em); }
    // .deg225 { transform: rotate(225deg) translate(12em) rotate(-225deg); }
    // .deg315 { transform: rotate(315deg) translate(12em) rotate(-315deg); }
}

