const fs = require('fs');

class ExpressionCalculator {
    constructor() {}

    calculateExpression(x) {
        try {
            const y = Math.sin(x) / Math.sin(2 * x - 4);
            return y;
        } catch (error) {
            throw new Error(`Помилка обчислення виразу: ${error.message}`);
        }
    }

    // Метод для запису результату у текстовий файл
    writeToTextFile(fileName, data) {
        fs.writeFileSync(fileName, data.toString());
        console.log(`Результат записано у текстовий файл '${fileName}'.`);
    }

    // Метод для читання результату з текстового файлу
    readFromTextFile(fileName) {
        const data = fs.readFileSync(fileName, 'utf-8');
        console.log(`Результат зчитано з текстового файлу '${fileName}': ${data}`);
        return parseFloat(data);
    }

    // Метод для запису результату у двійковий файл
    writeToBinaryFile(fileName, data) {
        const buffer = Buffer.alloc(8);
        buffer.writeDoubleLE(data, 0);
        fs.writeFileSync(fileName, buffer);
        console.log(`Результат записано у двійковий файл '${fileName}'.`);
    }

    // Метод для читання результату з двійкового файлу
    readFromBinaryFile(fileName) {
        const buffer = fs.readFileSync(fileName);
        const data = buffer.readDoubleLE(0);
        console.log(`Результат зчитано з двійкового файлу '${fileName}': ${data}`);
        return data;
    }
}

// Драйвер для розробленого класу
function main() {
    const expressionCalculator = new ExpressionCalculator();

    try {
        const inputValue = 2.5;
        const result = expressionCalculator.calculateExpression(inputValue);

        // Запис і читання з текстового файлу
        expressionCalculator.writeToTextFile('result.txt', result);
        const textFileResult = expressionCalculator.readFromTextFile('result.txt');

        // Запис і читання з двійкового файлу
        expressionCalculator.writeToBinaryFile('result.bin', result);
        const binaryFileResult = expressionCalculator.readFromBinaryFile('result.bin');
        
        // Порівняння результатів
        console.log(`Чи співпадають результати? ${textFileResult === binaryFileResult ? 'Так' : 'Ні'}`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    }
}

// Виклик драйвера
main();
