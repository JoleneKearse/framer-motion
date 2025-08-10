import { useState, useRef, useEffect } from "react";

import ButtonsBox from "./components/ButtonsBox";
import Button from "./components/Button";
import AnimationBox from "./components/AnimationBox";
import Rotate from "./components/Rotate";
import Enter from "./components/Enter";
import Gesture from "./components/Gesture";
import Scroll from "./components/Scroll";
import Layout from "./components/Layout";
import type { Action } from "./types";
import type { ActionType } from "./types";

export default function App() {
  const [activeAction, setActiveAction] = useState<Action>(null);
  const animationBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = (action: ActionType) => {
    setActiveAction(action);
  };

  // Scroll to animation box when activeAction changes
  useEffect(() => {
    if (activeAction && animationBoxRef.current) {
      animationBoxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeAction]);

  return (
    <>
      <h1>
        Hello, <span className="title-gradient">Framer Motion!</span>
      </h1>
      <p>
        Hi, y'all! This is simple follow through of the{" "}
        <a
          href="https://motion.dev/docs/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs
        </a>
        . So far everything seems pretty straightforward, although the{" "}
        <b>Scroll</b> & <b>Layout</b> animations are a bit more complex.
      </p>
      <p>
        You can checkout the code in the <i>aforementioned</i> docs or checkout
        my{" "}
        <a
          href="https://github.com/JoleneKearse/framer-motion"
          target="_blank"
          rel="noopener noreferrer"
        >
          repo
        </a>
        , where I just made it a bit easier for <i>me</i> to understand.
      </p>
      <main>
        <h2 className="subtitle-gradient-1">Animations</h2>
        <ButtonsBox>
          <Button
            label="Rotate"
            color="var(--pink-hot)"
            action="rotate"
            handleClick={handleClick}
          />
          <Button
            label="Enter"
            action="enter"
            color="var(--magenta-deep)"
            handleClick={handleClick}
          />
          <Button
            label="Gesture"
            color="var(--magenta-royal)"
            action="gesture"
            handleClick={handleClick}
          />
          <Button
            label="Scroll"
            color="var(--salmon-vibe)"
            action="scroll"
            handleClick={handleClick}
          />
          <Button
            label="Layout"
            color="var(--pink-warm)"
            action="layout"
            handleClick={handleClick}
          />
        </ButtonsBox>
        <AnimationBox ref={animationBoxRef} isActive={!!activeAction}>
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
