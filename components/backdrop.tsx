import { motion } from "framer-motion";

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-backdrop flex justify-center items-center z-30"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
