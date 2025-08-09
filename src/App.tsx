import { useState } from "react";

import ButtonsBox from "./components/ButtonsBox";
import Button from "./components/Button";
import AnimationBox from "./components/AnimationBox";
import Rotate from "./components/Rotate";
import Enter from "./components/Enter";
import Gesture from "./components/Gesture";
import Scroll from "./components/Scroll";
import Layout from "./components/Layout";

type Action = "rotate" | "enter" | "gesture" | "scroll" | "layout" | null;

export default function App() {
  const [activeAction, setActiveAction] = useState<Action>(null);
  const handleClick = (action: "rotate" | "enter" | "gesture" | "scroll" | "layout") => {
    setActiveAction(action);
  };

  return (
    <>
      <h1>Hello, Framer Motion!</h1>
      <p>Hi y'all!  This is simple follow through of the <a href="https://motion.dev/docs/react" target="_blank" rel="noopener noreferrer">docs</a>.  So far everything seems pretty straightforward, although the <b>Scroll</b> & <b>Layout</b> animations are a bit more complex.</p>
      <p>You can checkout the code in the <i>aforementioned</i> docs or checkout my repo, where I just made it a bit easier for <i>me</i> to understand, at </p>
      <main>
        <ButtonsBox>
          <Button label="Rotate" action="rotate" handleClick={handleClick} />
          <Button label="Enter" action="enter" handleClick={handleClick} />
          <Button label="Gesture" action="gesture" handleClick={handleClick} />
          <Button label="Scroll" action="scroll" handleClick={handleClick} />
          <Button label="Layout" action="layout" handleClick={handleClick} />
        </ButtonsBox>
        <AnimationBox>
          {activeAction === "rotate" && <Rotate />}
          {activeAction === "enter" && <Enter />}
          {activeAction === "gesture" && <Gesture />}
          {activeAction === "scroll" && <Scroll />}
          {activeAction === "layout" && <Layout />}
        </AnimationBox>
      </main>
    </>
  );
}
