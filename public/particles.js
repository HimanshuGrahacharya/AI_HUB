"use strict";
// AI-HUBS Particle Constellation Engine
class Particle {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
        this.color = '';
        this.canvas = canvas;
        this.reset();
    }
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 0.5;
        this.updateColor();
    }
    updateColor() {
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        if (theme === 'dark') {
            this.color = Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(6, 182, 212, 0.6)';
        }
        else {
            this.color = 'rgba(99, 102, 241, 0.4)';
        }
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > this.canvas.width)
            this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height)
            this.vy *= -1;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
class ParticleSystem {
    constructor(canvasId) {
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.count = 90;
        this.maxDist = 150;
        this.mouseDist = 200;
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
        window.addEventListener('themeChanged', () => {
            this.particles.forEach(p => p.updateColor());
        });
    }
    init() {
        this.resize();
        this.particles = Array.from({ length: this.count }, () => new Particle(this.canvas));
    }
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    drawLines(p1, p2, dist) {
        const alpha = 1 - dist / this.maxDist;
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        if (theme === 'dark') {
            const grad = this.ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.5})`);
            grad.addColorStop(1, `rgba(6, 182, 212, ${alpha * 0.5})`);
            this.ctx.strokeStyle = grad;
        }
        else {
            this.ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.2})`;
        }
        this.ctx.lineWidth = alpha * 1.2;
        this.ctx.stroke();
    }
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Draw grid
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
        this.ctx.lineWidth = 0.5;
        const gridSize = 60;
        for (let x = 0; x < this.canvas.width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        for (let y = 0; y < this.canvas.height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
        this.particles.forEach((p, i) => {
            p.update();
            p.draw(this.ctx);
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                if (!p2)
                    continue; // Fix: Check if p2 exists
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.maxDist) {
                    this.drawLines(p, p2, dist);
                }
            }
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.mouseDist) {
                    const alpha = 1 - dist / this.mouseDist;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.5})`;
                    this.ctx.lineWidth = alpha * 1.5;
                    this.ctx.stroke();
                }
            }
        });
        requestAnimationFrame(() => this.animate());
    }
}
// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem('bg-canvas');
});
//# sourceMappingURL=particles.js.map