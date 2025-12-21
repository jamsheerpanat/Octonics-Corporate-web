import { motion } from "framer-motion";
import { useEffect } from "react";
import Rellax from "rellax";

export default function OctopusMotion() {
  useEffect(() => {
    new Rellax(".rellax", { speed: -2, center: true });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating tentacle shapes */}
      <motion.img
        src="/images/tentacle-left.svg"
        alt="Tentacle left"
        className="rellax absolute left-[-10%] top-[10%] w-[25vw] opacity-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/tentacle-right.svg"
        alt="Tentacle right"
        className="rellax absolute right-[-10%] bottom-[0%] w-[25vw] opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[45%] w-20 h-20 bg-pink-400/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}