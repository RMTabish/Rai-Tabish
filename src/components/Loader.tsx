import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ setIsLoading }: { setIsLoading: (loading: boolean) => void }) => {
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExitAnimation(true);
      setTimeout(() => setIsLoading(false), 800); // Delay removing Loader to match animation
    }, 2500); // Adjust loading time if needed
  }, [setIsLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={exitAnimation ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white z-50"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-wide">Welcome</h1>
        <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin mt-4"></div>
        <p className="text-gray-400 mt-2">Loading your experience...</p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
