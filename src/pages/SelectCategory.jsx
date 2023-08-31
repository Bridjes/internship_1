import React, {useEffect, useState} from 'react';
import FetchCategory from "../API/category";
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../components/UI/Button/MyButton";
import ListOfButtons from "../components/ListOfButtons";
import MyLoader from "../components/UI/Loader/MyLoader";
import FetchQuestions from "../API/questions";
import {
    getRandomKeys,
    groupAndSortByCategory,
} from "../utils/sortQestions";
import {useFatching} from "../hooks/useFatching";
import {loadQuestions} from "../store/questionsReduser";
import classes from "../components/styles/SelectCategory.component.css"

const SelectCategory = () => {
    // диспетчер Redux
    const dispatch = useDispatch()
    // переменные состояния от Redux
    const questions = useSelector(state => state.question.questions)

    const [fetchQuestions, isLoading, loadingError] = useFatching(async () => {
        // получаем JSON со списком вопросов
        let rst = await FetchQuestions.getAll()
        // группируем в категории (по 5 вопросов в каждой)
        rst = groupAndSortByCategory(rst)
        // срезаем лишние группы, оставляя только 5 случайных
        rst = getRandomKeys(rst)

        dispatch(loadQuestions(rst))
    })

    // хук для срабатывания колбэка только один раз при создании объекта SelectCategory()
    useEffect(() => {
        // загрузит новые списки вопросов, если старые ещё не обнулены
        if (Object.keys(questions).length === 0) {
            fetchQuestions()
        }

        // этот колбэк сработает при удалении
        // return () => console.log("завершилось")
    }, [questions])
    // массив содержит зависимости при которых хук сработает
    // (если пуст, то сработает один раз при создании объекта этой страницы)

    return (
        <div>
            {isLoading
                ? <div className={"loader-box"}>
                    <MyLoader/>
                </div>
                : <ListOfButtons/>
            }
        </div>
    );
};

export default SelectCategory;