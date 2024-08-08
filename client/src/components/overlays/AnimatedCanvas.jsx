import React, { useEffect, useRef } from 'react';

const interpolateColor = (color1, color2, factor) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
};

const rgbToCss = (rgb) => {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

const randomFloat = (min, max) => Math.random() * (max - min) + min;

const AnimatedCanvas = ({ animate }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const colors = [
      [0, 123, 255],
      [0, 86, 179],
      [4, 45, 88],
      [0, 86, 179],
      [0, 123, 255],
      [0, 86, 179],
      [4, 45, 88],
      [4, 45, 88],
      [0, 86, 179],
      [0, 123, 255],
    ];

    const waves = Array.from({ length: 20 }, () => ({
        x: randomFloat(0, canvas.width),
        y: randomFloat(0, canvas.height),
        amplitude: randomFloat(2, 5), // Smaller wave amplitude
        frequency: randomFloat(0.005, 0.02),
        speedX: randomFloat(0.001, 0.01), // Slower horizontal speed
        speedY: randomFloat(0.001, 0.01), // Slower vertical speed
        length: randomFloat(50, 100), // Shorter wavy line length
        opacity: randomFloat(0.2, 0.5),
        vertical: Math.random() > 0.5, // Randomly flip some waves 90 degrees
      }));

    let animationFrameId;

    const drawWigglyWaves = () => {
      waves.forEach((wave) => {
        ctx.beginPath();
        if (wave.vertical) {
          // Draw vertically oriented wave
          ctx.moveTo(wave.x, wave.y);
          for (let i = 0; i < wave.length; i++) {
            const dx = wave.x + Math.sin(i * wave.frequency) * wave.amplitude;
            const dy = wave.y + i * wave.speedY;
            ctx.lineTo(dx, dy);
          }
        } else {
          // Draw horizontally oriented wave
          ctx.moveTo(wave.x, wave.y);
          for (let i = 0; i < wave.length; i++) {
            const dx = wave.x + i * wave.speedX;
            const dy = wave.y + Math.sin(i * wave.frequency) * wave.amplitude;
            ctx.lineTo(dx, dy);
          }
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Update position
        if (wave.vertical) {
          wave.y += wave.speedY;
          if (wave.y > canvas.height) wave.y = 0;
        } else {
          wave.x += wave.speedX;
          if (wave.x > canvas.width) wave.x = 0;
        }
      });
    };

    const changeColor = (timestamp) => {
      const duration = 60000; // 60 seconds for the full cycle
      const progress = (timestamp % duration) / duration;
      const colorIndex = Math.floor(progress * (colors.length - 1));
      const factor = (progress * (colors.length - 1)) % 1;

      const color = interpolateColor(
        colors[colorIndex],
        colors[(colorIndex + 1) % colors.length],
        factor
      );

      ctx.fillStyle = rgbToCss(color);
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // drawWigglyWaves();

      animationFrameId = requestAnimationFrame(changeColor);
    };

    if (animate) {
      animationFrameId = requestAnimationFrame(changeColor);
    } else {
      cancelAnimationFrame(animationFrameId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [animate]);

  return <canvas ref={canvasRef} className="absolute -z-10 top-0 left-0 w-full h-full" />;
};

export default AnimatedCanvas;
