// Пакет 33.Dushnyi.Lab6

// Клас елементу, який буде зберігатися в коробці
class Element {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

// Параметризований клас "Коробка"
class Box {
    constructor() {
        this.elements = [];
    }

    // Метод для розміщення елементу в коробці
    addItem(element) {
        this.elements.push(element);
    }

    // Метод для видалення елементу з коробки за індексом
    removeItem(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements.splice(index, 1);
        }
    }

    // Метод для отримання кількості елементів в коробці
    getItemCount() {
        return this.elements.length;
    }

    // Метод для знаходження мінімального елементу за вагою
    findMinWeightItem() {
        if (this.elements.length === 0) {
            return null; // Повертаємо null, якщо коробка пуста
        }

        let minItem = this.elements[0];

        for (let i = 1; i < this.elements.length; i++) {
            if (this.elements[i].weight < minItem.weight) {
                minItem = this.elements[i];
            }
        }

        return minItem;
    }
}

// Драйвер для розробленого класу
function main() {
    const box1 = new Box();
    const box2 = new Box();

    // Додаємо елементи в коробки
    box1.addItem(new Element('Book', 1.5));
    box1.addItem(new Element('Laptop', 3.0));
    box1.addItem(new Element('Notebook', 0.5));

    box2.addItem(new Element('Pen', 0.1));
    box2.addItem(new Element('Phone', 1.0));
    box2.addItem(new Element('Glasses', 0.2));

    // Виводимо кількість елементів в кожній коробці
    console.log(`Box 1 has ${box1.getItemCount()} items.`);
    console.log(`Box 2 has ${box2.getItemCount()} items.`);

    // Знаходимо та виводимо мінімальний елемент за вагою в кожній коробці
    const minItemBox1 = box1.findMinWeightItem();
    const minItemBox2 = box2.findMinWeightItem();

    console.log('Min weight item in Box 1:', minItemBox1);
    console.log('Min weight item in Box 2:', minItemBox2);
}

// Виклик драйвера
main();
