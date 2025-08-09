type ButtonsBoxProps = {
  children: React.ReactNode;
};

const ButtonsBox = ({ children }: ButtonsBoxProps) => {
  return <div className="buttons-box">{children}</div>;
};

export default ButtonsBox;
