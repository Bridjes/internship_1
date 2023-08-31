import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import {loadQuestions, saveCurentQuestion} from "../store/questionsReduser";
import {useNavigate} from "react-router-dom";
import {addScore} from "../store/scoreReduser";
import {deleteQuestionById} from "../utils/sortQestions";
import classes from "./styles/AnsweringQuestion.component.css"

const AnsweringQuestion = () => {
    const dispatch = useDispatch()
    const curentQuestion = useSelector(state => state.question.curentQuestion)
    const questions = useSelector(state => state.question.questions)
    const [answer, setAnswer] = useState("")
    console.log(curentQuestion.answer)

    const navigate = useNavigate();

    return (
        <div className={"answer-box"}>
            <div className={"answer"}>
                {curentQuestion.question}
            </div>
            <div className={"answer-input"}>
                <MyInput
                    value={answer}
                    // загоняем введённое значение в переменную состояния
                    onChange={e => setAnswer(e.target.value)}
                    type={"text"}
                    placeholder={"Your answer..."}
                />
                <button
                    onClick={async event => {
                        if (answer===curentQuestion.answer) {
                            dispatch(addScore(curentQuestion.value))
                        }
                        dispatch(loadQuestions(deleteQuestionById(questions, curentQuestion.id)))
                        navigate('/')
                    }}
                    key={curentQuestion.id}>
                    {"Подтвердить"}
                </button>
            </div>
        </div>
    );
};

export default AnsweringQuestion;