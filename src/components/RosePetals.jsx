import React, { useEffect, useRef } from 'react';

const RosePetals = () => {
  const canvasRef = useRef(null);
  const petalsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Petal {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = 0.4;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = 15 + Math.random() * 15;
        this.speedY = 0.5 + Math.random() * 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.swayOffset = Math.random() * Math.PI * 2;
        this.swaySpeed = 0.02 + Math.random() * 0.02;
        this.color = ['#B76E79', '#E9967A', '#FFB6C1', '#FF69B4'][Math.floor(Math.random() * 4)];
      }

      update() {
        this.y += this.speedY;
        this.swayOffset += this.swaySpeed;
        this.x += Math.sin(this.swayOffset) * 0.5 + this.speedX;
        this.rotation += this.rotationSpeed;

        const dx = mouseRef.current.x - mouseRef.current.prevX;
        const dy = mouseRef.current.y - mouseRef.current.prevY;
        const mouseSpeed = Math.sqrt(dx * dx + dy * dy);

        if (mouseSpeed > 5) {
          const distX = this.x - mouseRef.current.x;
          const distY = this.y - mouseRef.current.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < 100) {
            const force = (100 - distance) / 100;
            this.x += (distX / distance) * force * 3;
            this.y += (distY / distance) * force * 3;
          }
        }

        if (this.y > canvas.height + 50 || this.x < -50 || this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.7, this.size * 1.2, Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity * 0.7;
        ctx.fill();

        ctx.restore();
      }
    }

    for (let i = 0; i < 18; i++) {
      petalsRef.current.push(new Petal());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach(petal => {
        petal.update();
        petal.draw(ctx);
      });

      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.4 }}
    />
  );
};

export default RosePetals;
