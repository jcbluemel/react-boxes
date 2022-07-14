import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Box list: manages boxes in the list
 *
 * State:
 * - boxes: array like [ { backgroundColor, height, width }, ... ]
 *
 * App -> BoxList -> Box / NewBoxForm
 */
function BoxList(){
    const [boxes, setBoxes] = useState([]);

    function removeBox(evt) {
        evt.preventDefault();
        const id = evt.target.parent.key;
        const newBoxes = boxes.filter(box => box.id !== id);
        setBoxes(boxList => [...newBoxes]);
    }

    function renderBoxes() {
        return boxes.map(box =>
        <div key={box.id}>
            <Box 
                height={box.height} 
                width={box.width} 
                backgroundColor={box.backgroundColor} />
            <button onClick={removeBox}>X</button>
        </div> )
    }

    function addBox(formData) {
        const newBox = {...formData, id:uuid()};
        setBoxes(boxList => [...boxList, newBox]);
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            {renderBoxes()}
        </div>
    )
}

export default BoxList;