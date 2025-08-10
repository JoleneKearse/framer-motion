import { forwardRef } from "react";

type AnimationBoxProps = {
  children: React.ReactNode;
  isActive: boolean;
};

const AnimationBox = forwardRef<HTMLDivElement, AnimationBoxProps>(
  ({ children, isActive }, ref) => {
    return (
      <div
        ref={ref}
        className="animation-box"
        style={{ height: isActive ? "500px" : "0" }}
      >
        {children}
      </div>
    );
  }
);

AnimationBox.displayName = "AnimationBox";

export default AnimationBox;
