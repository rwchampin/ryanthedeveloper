"use client";
import Particle from "./particle";

class Effect {
    constructor(width, height, logoRef, settings) {
        if(!logoRef) return console.error("logoRef is required");
        this.settings = settings;
        this.width = width;
        this.height = height;
        this.image = logoRef
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.x = this.centerX - this.image.width / 2;
        this.y = this.centerY - this.image.height / 2;
        this.particles = [];
        this.gap = settings.gap;
        this.mouse = {
            radius: 1000,
            x: this.centerX,
            y: this.centerY
        }
        window.addEventListener("mousemove", event => {
            this.mouse.x = event.x;
            this.mouse.y = event.y;
        });

        window.addEventListener("touchstart", event => {
            this.mouse.x = event.changedTouches[0].clientX;
            this.mouse.y = event.changedTouches[0].clientY;
        }, false);

        window.addEventListener("touchmove", event => {
            event.preventDefault();
            this.mouse.x = event.targetTouches[0].clientX;
            this.mouse.y = event.targetTouches[0].clientY;
        }, false);

        window.addEventListener("touchend", event => {
            event.preventDefault();
            this.mouse.x = 0;
            this.mouse.y = 0;
        }, false);
    }
    init(context) {
        context.drawImage(this.image, this.x, this.y);
        var pixels = context.getImageData(0, 0, this.width, this.height).data;
        var index;
        for (var y = 0; y < this.height; y += this.gap) {
            for (var x = 0; x < this.width; x += this.gap) {
                index = (y * this.width + x) * 4;
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

                const alpha = pixels[index + 3];
                if (alpha > 0) {
                    this.particles.push(new Particle(this, x, y, color,this.settings));
                }
            }
        }
        context.clearRect(0, 0, this.width, this.height);
    }
    update() {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
        }
    }
    render(context) {
        context.clearRect(0, 0, this.width, this.height);
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            context.fillStyle = p.color;
            context.fillRect(p.x, p.y, p.size, p.size);
        }
    }
}

export default Effect