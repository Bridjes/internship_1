import React from 'react';
import {Link} from "react-router-dom";
import classes from './MyNavbar.component.css'

const MyNavbar = () => {
    return (
        <nav>
            <div className={"logo"}>
                <Link className={"logo-link"} to={"/"}>LOGO</Link>
            </div>
            <div className={"nav"}>
                <Link className={"nav-link"} to={"/"}>Выбор категории</Link>
                <Link className={"nav-link"} to={"/question"}>Выбор вопроса</Link>
                <Link className={"nav-link"} to={"/answer"}>Ответ на вопрос</Link>
            </div>
            <div className={"auth"}></div>
        </nav>
    );
};

export default MyNavbar;