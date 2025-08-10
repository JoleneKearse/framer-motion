import type { ActionType } from "../types";

type ButtonProps = {
  label: string;
  color: string;
  action: ActionType;
  handleClick: (action: ActionType) => void;
};

const Button = ({ label, color, action, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={() => handleClick(action)}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};

export default Button;
