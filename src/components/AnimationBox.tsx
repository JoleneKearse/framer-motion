type AnimationBoxProps = {
  children: React.ReactNode;
};

const AnimationBox = ({ children }: AnimationBoxProps) => {
  return <div className="animation-box">{children}</div>;
};

export default AnimationBox;
