import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCategories, sortCategories} from "../store/categoriesReduser";
import FetchCategory from "../asyncAction/category";

const AnswerQuestion = () => {


    // хук для срабатывания колбэка только один раз при создании объекта SelectCategory()
    useEffect(() => {
        console.log("сработало2")
        // этот колбэк сработает при удалении
        return () => console.log("завершилось2")
    }, [])  // массив содержит зависимости при которых хук сработает
    // (если пуст, то сработает один раз при создании объекта этой страницы)

    return (
        <div>
            Отвечаеем на вопрос
        </div>
    );
};

export default AnswerQuestion;