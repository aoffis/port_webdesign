import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import React from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import "../Styles/Home.css";

function Home() {
  const screens = [
    {
      titlehome: "One",
      color: "#ff0055",
    },
    {
      titlehome: "Two",
      color: "#0099ff",
    },
    {
      titlehome: "Threeeee",
      color: "#22cc88",
    },
    {
      titlehome: "Four",
      color: "#ffaa00",
    },
    {
      titlehome: "Five",
      color: "#ffaa00",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Container className="containerhome">
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
      </Container>
    </>
  );
}
export default Home;
