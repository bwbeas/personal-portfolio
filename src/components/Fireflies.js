// Fireflies.js
import React from 'react';

const quantity = 15;

// Helper to generate random values for starting position, scale, animation durations
const randomRange = (min, max) => Math.random() * (max - min) + min;

export default function Fireflies() {
  const fireflies = Array.from({ length: quantity });

  return (
    <>
      {fireflies.map((_, i) => {
        // Random initial position (vw, vh)
        const left = randomRange(0, 100);
        const top = randomRange(0, 100);
        const size = randomRange(0.3, 0.7); // in vw
        const animDuration = randomRange(30, 60); // seconds
        const driftDuration = randomRange(6, 12); // seconds
        const flashDuration = randomRange(4000, 8000); // milliseconds
        const flashDelay = randomRange(0, 4000); // milliseconds

        // Inline styles for each firefly
        const style = {
          position: 'fixed',
          left: `${left}vw`,
          top: `${top}vh`,
          width: `${size}vw`,
          height: `${size}vw`,
          marginLeft: `-${size / 2}vw`,
          marginTop: `-${size / 2}vw`,
          pointerEvents: 'none',
          animationName: `move${i + 1}`,
          animationDuration: `${animDuration}s`,
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
          zIndex: 9999,
        };

        return (
          <div key={i} className="firefly" style={style}>
            <style>
              {`
                .firefly::before,
                .firefly::after {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  transform-origin: -10vw;
                }

                .firefly::before {
                  background: black;
                  opacity: 0.4;
                  animation: drift ease alternate infinite;
                  animation-duration: ${driftDuration}s;
                }

                .firefly::after {
                  background: white;
                  opacity: 1;
                  box-shadow: 0 0 2vw 0.4vw yellow;
                  animation: drift ease alternate infinite, flash ease infinite;
                  animation-duration: ${driftDuration}s, ${flashDuration}ms;
                  animation-delay: 0ms, ${flashDelay}ms;
                }

                @keyframes drift {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                @keyframes flash {
                  0%, 30%, 100% {
                    opacity: 0;
                    box-shadow: 0 0 0vw 0vw yellow;
                  }
                  5% {
                    opacity: 1;
                    box-shadow: 0 0 2vw 0.4vw yellow;
                  }
                }

                /* Move keyframes */
                @keyframes move${i + 1} {
                  0% { transform: translateX(0) translateY(0) scale(1); }
                  50% { 
                    transform: translateX(${randomRange(-10, 10)}vw) translateY(${randomRange(-10, 10)}vh) scale(${randomRange(0.7, 1.3)}); 
                  }
                  100% { 
                    transform: translateX(${randomRange(-10, 10)}vw) translateY(${randomRange(-10, 10)}vh) scale(${randomRange(0.7, 1.3)});
                  }
                }
              `}
            </style>
          </div>
        );
      })}
    </>
  );
}
