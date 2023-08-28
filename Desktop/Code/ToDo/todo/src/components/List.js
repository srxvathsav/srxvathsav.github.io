import React from "react";
import ListItem from "./ListItem";
// import ListItem from './ListItem'

export default function List({ todo, toggleFun, deleter }) {
    return (
        <ul className="list">
            {todo.length === 0 && "No todos pending"}
            {todo.map((i) => {
                return (
                    <ListItem
                        {...i}
                        key={i.id}
                        toggleFun={toggleFun}
                        deleter={deleter}
                    />
                );
            })}
        </ul>
    );
}
