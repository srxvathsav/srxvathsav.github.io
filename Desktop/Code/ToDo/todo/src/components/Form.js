import React from 'react'
import { useState } from 'react'
export default function Form(props) {
    const [items, setItem] = useState("")

    function submitHandler(e) {
        e.preventDefault()
        if (items === "")
        {
            alert("Enter some valid data")
            return ;
        }
        if (setItem === "") return;
        props.onSubmit(items)
        setItem("")
    }

    return (
        <form onSubmit={submitHandler} className='new-item-form' >
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input
                    value={items}
                    type='text'
                    id="item"
                    onChange={e => setItem(e.target.value)}
                />
            </div>
            <button className='btn'>Add item</button>
        </form>
    )
}
