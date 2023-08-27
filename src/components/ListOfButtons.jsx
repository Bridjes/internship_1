import React from 'react';
import MyButton from "./UI/Button/MyButton";
import classes from "./styles/ListOfButtons.component.css"

const ListOfButtons = ({arr}) => {
    return (
        <div className={"buttons"}>
            {arr.map(item => <MyButton key={item.id}>{item.title}</MyButton>)}
        </div>
    );
};

export default ListOfButtons;