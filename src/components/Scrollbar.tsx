// ScrollBar.tsx
import React from "react";
import "../ScrollBar.css"; // Import the CSS file for styling

interface ScrollBarProps {
  children: React.ReactNode;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ children }) => {
  return (
    <div className="scroll-container">
      <div className="content">{children}</div>
    </div>
  );
};

export default ScrollBar;
