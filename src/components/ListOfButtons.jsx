import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import MyButton from "./UI/Button/MyButton";
import classes from "./styles/ListOfButtons.component.css"
import {saveCurentQuestion} from "../store/questionsReduser";

const ListOfButtons = () => {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.question.questions)
    const [selectedQuestion, setSelectedQuestion] = useState("")

    // объект переадресации
    const navigate = useNavigate();

    return (
        <div className={"categories-box"}>
            {Object.entries(questions).map(([key, value]) => (
                <div key={key}>
                    {value.length > 0 ? (
                        <div className={"categories"}>
                            <div className={"name"}>{value[0].category.title}</div>
                            <div className={"prices"}>
                                {value.map((item) => (
                                <MyButton
                                    onClick={async event => {
                                        dispatch(saveCurentQuestion(item))
                                        navigate('/answer')
                                    }
                                    }
                                    key={item.id}>
                                    {item.value}
                                </MyButton>
                                ))}
                            </div>
                        </div>
                        ) : null
                    }
                </div>
            ))
            }
        </div>
    );
};

export default ListOfButtons;