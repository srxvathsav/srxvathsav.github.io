import React from 'react'

export default function ListItem({ status, id, title, toggleFun, deleter }) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={status}
                    onChange={(e) => toggleFun(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={() => deleter(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}
