import { useState } from "react";

const HeavyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {isVisible && <p>My Heavy Component</p>}
      <button
        className="btn btn-accent"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        SHOW
      </button>
    </div>
  );
};

export default HeavyComponent;
