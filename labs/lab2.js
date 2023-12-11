
class Camera {

    constructor(lens, imageSensor, shutter, logFilePath) {
        this.lens = lens;
        this.imageSensor = imageSensor;
        this.shutter = shutter;
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

    }
}


class Lens {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class ImageSensor {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class Shutter {
    constructor(type) {
        this.type = type;
    }

    click() {
        console.log("Shutter clicked.");
    }
}


class CameraDriver {
    static run() {
    
        const lens = new Lens("50mm");
        const sensor = new ImageSensor("Full Frame");
        const shutter = new Shutter("Mechanical");
        const logFilePath = "camera_log.txt";

  
        const camera = new Camera(lens, sensor, shutter, logFilePath);

    
        camera.takePhoto();
        camera.changeLens(new Lens("24-70mm"));
   
    }
}

CameraDriver.run();
