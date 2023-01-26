export const sweepLeft = {
  hidden: {
    x: "10vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      delay: 0.2,
    },
  },
};

export const sweepRight = {
  hidden: {
    x: "-10vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      delay: 0.2,
    },
  },
};

export const sweepDown = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      delay: 0.5,
    },
  },
};

export const sweepUp = {
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      delay: 0.5,
    },
  },
};

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 1000,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
