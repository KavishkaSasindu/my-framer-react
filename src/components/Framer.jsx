import React, { useState } from "react";
import { motion } from "framer-motion";

const Framer = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const boxVarient = {
    start: {
      x: -1000,
    },
    end: {
      x: 700,
      transition: {
        dumping: 60,
      },
    },
  };
  return (
    <div>
      <div>
        <motion.div
          className="w-[250px] h-[250px] ml-10 mt-10 rounded-2xl flex justify-center items-center text-center"
          animate={{
            x: isAnimating ? 1500 : 0,
            opacity: isAnimating ? 1 : 0.5,
            rotate: isAnimating ? 360 : 0,
            backgroundColor: isAnimating ? "red" : "yellow",
          }}
          initial={{
            opacity: 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            dumping: 100,
          }}
          onClick={() => {
            setIsAnimating(!isAnimating);
          }}
        >
          Motion
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] ml-10 mt-10 rounded-2xl flex justify-center items-center text-center bg-slate-600"
          drag
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
          }}
          dragConstraints={{
            right: 20,
            left: -10,
            bottom: 5,
            top: 20,
          }}
        >
          Motion
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] ml-10 mt-10 rounded-2xl flex justify-center items-center text-center bg-green-800"
          variants={boxVarient}
          initial="start"
          animate="end"
        >
          Motion
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] ml-10 mt-10 rounded-[50px] flex justify-center items-center text-center bg-green-800"
          animate={{
            scale: [1, 1.4, 1.4, 1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{
            duration: 1,
          }}
        >
          Motion
        </motion.div>
      </div>
    </div>
  );
};

export default Framer;
