import * as motion from "motion/react-client";

export default function Gestures() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8, backgroundColor: "var(--pink-light)" }}
      style={box}
      onHoverStart={() => console.log('hover started!')}
    />
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#A01A7D",
  borderRadius: 5,
};
