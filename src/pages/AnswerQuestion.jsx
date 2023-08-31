import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnsweringQuestion from "../components/AnsweringQuestion";

const AnswerQuestion = () => {
    const dispatch = useDispatch()
    const question = useSelector(state => state.question.curentQuestion)

    return (
        <div>
            <AnsweringQuestion/>
        </div>
    );
};

export default AnswerQuestion;