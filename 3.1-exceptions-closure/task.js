//Задача 1
function parseCount(inputNumber) {
    const itemsNumber = Number.parseInt(inputNumber);
    if (isNaN(itemsNumber) === true) {
        throw new Error("Невалидное значение");
    }
    return itemsNumber;
}

function validateCount(inputNumber) {
    try {
        parseCount(inputNumber);
    } catch (error) {
        return error;
    }
    return parseCount(inputNumber);
}