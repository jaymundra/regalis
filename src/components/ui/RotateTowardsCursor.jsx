import React, { useState, useRef } from "react";

const RotateTowardsCursor = ({ src, width = 300, height = 300 }) => {
  const [rotation, setRotation] = useState(0);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const imgCenterX = rect.left + rect.width / 2;
    const imgCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - imgCenterX;
    const deltaY = e.clientY - imgCenterY;

    // Calculate angle in degrees with respect to the horizontal axis
    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

    setRotation(angle);
  };

  const handleMouseLeave = () => {
    setRotation(0); // Optional: reset rotation on mouse leave
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt="Rotating"
      width={width}
      height={height}
      style={{
        display: "block",
        transition: "transform 0.1s ease-out",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
        userSelect: "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default RotateTowardsCursor;
