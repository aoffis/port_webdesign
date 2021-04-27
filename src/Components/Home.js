import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Home.css";

function Home() {
  const screens = [
    {
      titlehome: "HI !",
      color: "#ff0055",
    },
    {
      titlehome: "THIS",
      color: "#0099ff",
    },
    {
      titlehome: "IS",
      color: "#22cc88",
    },
    {
      titlehome: "MY",
      color: "#ffaa00",
    },
    {
      titlehome: "PORTFOLIO",
      color: "#ff00ff",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="containerhome"
      >
        <AnimateSharedLayout>
          <ol style={{ transform: "translateZ(0)" }}>
            {screens.map(({ titlehome, color }, i) => (
              <motion.li
                animate
                key={i}
                className={`titlehome ${i === selected && "selected"}`}
                style={{ color: i === selected ? color : "#333" }}
                onClick={() => setSelected(i)}
              >
                {i === selected && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
                {titlehome}
              </motion.li>
            ))}
          </ol>
        </AnimateSharedLayout>
      </motion.div>
    </>
  );
}
export default Home;
