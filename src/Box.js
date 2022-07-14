import React from "react";

/** A single box.
 *
 * This has no state --- just three props:
 *
 *  Props:
 *    - background color: color of box
 *    - height
 *    - width
 *
 *  BoxList -> Box
 **/
function Box({backgroundColor="red", height="100", width="100"}) {
    const boxStyle = {
        backgroundColor,
        height: `${height}px`,
        width: `${width}px`
    };
    return <div style={boxStyle}></div>;
}

export default Box;

