type ButtonProps = {
  label: string;
  color: string;
  action: "rotate" | "enter" | "gesture" | "scroll" | "layout";
  handleClick: (action: "rotate" | "enter" | "gesture" | "scroll" | "layout") => void;
};

const Button = ({ label, color, action, handleClick }: ButtonProps) => {
  return (
    <button onClick={() => handleClick(action)} style={{ backgroundColor: color }}>
      {label} 
    </button>
  );
};

export default Button;
