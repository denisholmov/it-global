const generationIndexForArray = index => Math.floor(Math.random() * (index - 0 + 1)) + 0; // функция генерирующая индекс для массива;

const sumItems = (items) => {
    let sum = 0;
    for(let i = 0; i<items.length; i++){
        sum=sum+items[i];
    }
    return sum;
}

export {generationIndexForArray, sumItems};