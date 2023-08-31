// Функция использует объект grouped, чтобы сгруппировать
// словари по category_id. Затем она перебирает объект, чтобы
// создать массивы из 5 словарей с одинаковым category_id, и
// сохраняет их в новый словарь с ключами category_id.
export function groupAndSortByCategory(array) {
    const grouped = {};
    array.forEach((item) => {
        const categoryId = item.category_id;
        if (!grouped[categoryId]) {
            grouped[categoryId] = [];
        }
        grouped[categoryId].push(item);
    });

    const result = {};
    for (const categoryId in grouped) {
        const items = grouped[categoryId];
        const uniqueValues = new Set();
        const groups = [];
        for (const item of items) {
            if (item.value !== null && !uniqueValues.has(item.value)) {
                uniqueValues.add(item.value);
                groups.push(item);
                if (groups.length === 5) {
                    break;
                }
            }
        }
        result[categoryId] = groups;
    }

    return result;
}

// Функция на JavaScript, которая принимает словарь и
// возвращает словарь только с 5 случайными ключами
export function getRandomKeys(dictionary) {
    const keys = Object.keys(dictionary);
    const randomKeys = [];
    while (randomKeys.length < 5) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];
        if (!randomKeys.includes(randomKey)) {
            randomKeys.push(randomKey);
        }
    }
    const result = {};
    for (const key of randomKeys) {
        result[key] = dictionary[key];
    }
    return result;
}

// Функция принимает два параметра: list - список, и id - искомый id.
// Она ищет в списке массив, в котором есть объект с ключом "id" и значением,
// равным переданному id. Если такой массив найден, он вырезается из списка и
// возвращается функцией. Если массив не найден, функция возвращает null.
export function deleteQuestionById(dict, id) {
    for (let key in dict) {
        let list = dict[key];
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list.splice(i, 1);
                dict[key] = list
                return dict
            }
        }
    }
    return null;
}