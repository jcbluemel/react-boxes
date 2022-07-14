import React, { useState } from "react";

/** Form for creating a new box to add to a list.
 *
 *  Props:
 *    - addBox: function from BoxList
 *
 *  State:
 *    - formData: contains { backgroundColor, height, width }
 *
 *  BoxList -> NewBoxForm
 */
function NewBoxForm({ addBox=Math.random }) {
    const initialState = {
        backgroundColor: '',
        height: 0,
        width: 0
    };
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    function handleSubmit(evt){
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='backgroundColor'>Background Color:</label>
            <input
                id='backgroundColor'
                name='backgroundColor'
                value={formData.backgroundColor}
                onChange={handleChange} />
            <label htmlFor='height'>Height:</label>
            <input
                id='height'
                name='height'
                value={formData.height}
                type="number"
                onChange={handleChange} />
            <label htmlFor='width'>Width:</label>
            <input
                id='width'
                name='width'
                type="number"
                value={formData.width}
                onChange={handleChange} />
            <button>Submit new box!</button>
        </form>)
}

export default NewBoxForm;