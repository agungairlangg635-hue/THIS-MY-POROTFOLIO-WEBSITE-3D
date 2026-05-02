import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Gradient fade di atas - untuk transisi mulus dari section sebelumnya */}
        {idName === "about" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100vw",
              height: "350px",
              background:
                "linear-gradient(to bottom, #050816 0%, rgba(5, 8, 22, 0.9) 30%, rgba(5, 8, 22, 0.6) 60%, transparent 100%)",
              pointerEvents: "none",
              marginTop: "-200px",
              zIndex: 1,
            }}
          />
        )}

        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Wrapper konten dengan z-index lebih tinggi agar di atas gradient */}
        <div className="relative z-10">
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;