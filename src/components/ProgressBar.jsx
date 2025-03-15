import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

const ProgressBar = ({ valueStart, valueEnd, duration, easingFunction, repeat, label }) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    let animation;
    if (repeat) {
      animation = animate(valueStart, valueEnd, {
        duration,
        ease: easingFunction,
        onUpdate: (latest) => setValue(latest),
        repeat: Infinity,
        repeatType: "reverse"
      });
    } else {
      animation = animate(valueStart, valueEnd, {
        duration,
        ease: easingFunction,
        onUpdate: (latest) => setValue(latest)
      });
    }

    return () => animation.stop();
  }, [valueStart, valueEnd, duration, easingFunction, repeat]);

  return (
    <div className="progress-bar">
      <svg className="progress-circle" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle cx="50" cy="50" r="45" className="progress-bg" />

        {/* Animated Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          className="progress-fg"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * value) / 100}
          transition={{ duration }}
        />
      </svg>
      <div className="progress-value">
        {Math.round(value)}%
        <span className="progress-label">{label}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
