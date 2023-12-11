// Абстрактний суперклас предметної області камери
class Camera {
    constructor(lens, imageSensor, shutter, logFilePath) {
        this.lens = lens;
        this.imageSensor = imageSensor;
        this.shutter = shutter;''
        this.logFilePath = logFilePath;
    }

    takePhoto() {
        this.log(`Taking a photo with ${this.lens.getType()} lens and ${this.imageSensor.getType()} sensor.`);
        this.shutter.click();
        this.log("Photo taken successfully.");
    }

    changeLens(newLens) {
        this.log(`Changing lens to ${newLens.getType()}.`);
        this.lens = newLens;
        this.log("Lens changed successfully.");
    }

    log(message) {
        console.log(message);

        // Додайте код для запису у файл для веб-середовища
    }

    // Абстрактний метод, який потрібно реалізувати в підкласах
    abstractFunction() {
        throw new Error("Abstract method must be implemented in subclasses");
    }
}

// Пакет для програми
var Dushnyi = Dushnyi || {};
Dushnyi.Lab3 = Dushnyi.Lab3 || {};

// Класи для об'єктів предметної області
Dushnyi.Lab3.Lens = class Lens {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
};

Dushnyi.Lab3.ImageSensor = class ImageSensor {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
};

Dushnyi.Lab3.Shutter = class Shutter {
    constructor(type) {
        this.type = type;
    }

    click() {
        console.log("Shutter clicked.");
    }
};

// Підклас для цифрової відеокамери
Dushnyi.Lab3.DigitalVideoCamera = class DigitalVideoCamera extends Camera {
    constructor(lens, imageSensor, shutter, logFilePath, videoResolution) {
        super(lens, imageSensor, shutter, logFilePath);
        this.videoResolution = videoResolution;
    }

    recordVideo() {
        this.log(`Recording video with ${this.videoResolution} resolution.`);
        // Додаткова логіка запису відео
        this.log("Video recording completed.");
    }

    // Реалізація абстрактного методу з суперкласу
    abstractFunction() {
        this.log("DigitalVideoCamera specific function.");
    }

    // Реалізація інтерфейсу (можете додати свої власні методи)
    interfaceMethod() {
        this.log("Implementing interface method.");
    }
};

// Клас-драйвер для тестування та демонстрації роботи
Dushnyi.Lab3.CameraDriver = class CameraDriver {
    static run() {
        const lens = new Dushnyi.Lab3.Lens("50mm");
        const sensor = new Dushnyi.Lab3.ImageSensor("Full Frame");
        const shutter = new Dushnyi.Lab3.Shutter("Mechanical");
        const logFilePath = "camera_log.txt";
        const videoResolution = "4K";

        // Створення об'єктів для тестування цифрової відеокамери
        const digitalVideoCamera = new Dushnyi.Lab3.DigitalVideoCamera(lens, sensor, shutter, logFilePath, videoResolution);

        // Тестування методів
        digitalVideoCamera.takePhoto();
        digitalVideoCamera.changeLens(new Dushnyi.Lab3.Lens("24-70mm"));
        digitalVideoCamera.recordVideo();
        digitalVideoCamera.abstractFunction();
        digitalVideoCamera.interfaceMethod();
    }
};

// Виклик функції для тестування та демонстрації
Dushnyi.Lab3.CameraDriver.run();
