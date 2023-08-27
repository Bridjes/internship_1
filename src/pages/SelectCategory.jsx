import React, {useEffect, useState} from 'react';
import FetchCategory from "../asyncAction/category";
import {useDispatch, useSelector} from "react-redux";
import {loadCategories} from "../store/categoriesReduser";
import MyButton from "../components/UI/Button/MyButton";
import ListOfButtons from "../components/ListOfButtons";
import {getRandomDictionaries} from "../utils/convert5Categories";
import MyLoader from "../components/UI/Loader/MyLoader";

const SelectCategory = () => {
    // диспетчер Redux
    const dispatch = useDispatch()
    // переменная состояния от Redux
    const categories = useSelector(state => state.category.categories)

    // переменная состояния
    const [isLoading, setIsLoading] = useState(false)

    // хук для срабатывания колбэка только один раз при создании объекта SelectCategory()
    useEffect(() => {
        fetchCategories()
        // этот колбэк сработает при удалении
        // return () => console.log("завершилось")
    }, [])  // массив содержит зависимости при которых хук сработает
    // (если пуст, то сработает один раз при создании объекта этой страницы)

    // обрабатывает запрос по API
    async function fetchCategories() {
        // статус "Загрузка инфы"
        setIsLoading(true)
        // таймаут загузки в 1 с
        setTimeout(async () => {
            // получение ответа по API запросу
            let rst = await FetchCategory.getAll()
            // срезаем лишние категории, оставляя только 5
            rst = getRandomDictionaries(rst, 3)
            // запись в кеш-хранилище
            dispatch(loadCategories(rst))
            // статус "Конец загрузки"
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div>
            {isLoading
                ? <MyLoader/>
                : <ListOfButtons arr={categories}/>
            }
        </div>
    );
};

export default SelectCategory;