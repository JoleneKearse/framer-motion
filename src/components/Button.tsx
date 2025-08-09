type ButtonProps = {
  label: string;
  action: "rotate" | "enter" | "gesture" | "scroll" | "layout";
  handleClick: (action: "rotate" | "enter" | "gesture" | "scroll" | "layout") => void;
};

const Button = ({ label, action, handleClick }: ButtonProps) => {
  return (
    <button onClick={() => handleClick(action)}>
      {label} 
    </button>
  );
};

export default Button;
