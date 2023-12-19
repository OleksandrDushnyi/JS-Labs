// Пакет 33.Dushnyi.Lab4
class ExpressionCalculator {
    // Конструктор класу
    constructor() {}

    // Метод для обчислення виразу y = sin(x) / sin(2x - 4)
    calculateExpression(x) {
        try {
            // Обчислення значення виразу
            const y = Math.sin(x) / Math.sin(2 * x - 4);
            
            // Повернення результату
            return y;
        } catch (error) {
            // Обробка помилок
            throw new Error(`Помилка обчислення виразу: ${error.message}`);
        }
    }
}

// Драйвер для розробленого класу
function main() {
    const expressionCalculator = new ExpressionCalculator();

    try {
        // Вхідні дані (змініть їх за необхідності)
        const inputValue = 2.5;

        // Обчислення виразу
        const result = expressionCalculator.calculateExpression(inputValue);

        // Запис результату у файл (за допомогою Node.js fs)
        const fs = require('fs');
        fs.writeFileSync('result.txt', result.toString());

        console.log(`Результат обчислення записано у файл 'result.txt'.`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    }
}

// Виклик драйвера
main();
