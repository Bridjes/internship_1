import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import classes from './MyNavbar.component.css'
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../Button/MyButton";
import {addScore} from "../../../store/scoreReduser";
import {loadQuestions, resetQuestions} from "../../../store/questionsReduser";
import {deleteQuestionById} from "../../../utils/sortQestions";

const MyNavbar = () => {
    const score = useSelector(state => state.score.score)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    return (
        <nav>
            <div className={"logo"}>
                <Link className={"logo-link"} to={"/"}>LOGO</Link>
            </div>
            <div className={"nav"}>
                <MyButton
                    onClick={async event => {
                        dispatch(resetQuestions())
                        navigate('/')
                    }}
                >
                    {"Сбросить"}
                </MyButton>
            </div>
            <div className={"auth"}>
                {score}
            </div>
        </nav>
    );
};

export default MyNavbar;