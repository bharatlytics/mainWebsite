import { motion } from "framer-motion";

export default function AiAssistant() {
  return (
    <motion.div
      className="relative w-64 h-64"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary/30"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Middle ring */}
      <motion.div
        className="absolute inset-4 rounded-full border-4 border-primary/50"
        animate={{
          rotate: -360,
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner circle with pulse */}
      <motion.div
        className="absolute inset-8 rounded-full bg-primary/20"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">🤖</span>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i / 6) * Math.PI * 2) * 100,
            y: Math.sin((i / 6) * Math.PI * 2) * 100,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
