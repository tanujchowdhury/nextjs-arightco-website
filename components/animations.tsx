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

export const nameVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -10,
  },
};
export const titleVariant = {
  initial: {
    y: 0,
    opacity: 1,
  },
  hover: {
    y: -15,
    opacity: 0,
  },
};
export const iconVariant = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 0,
  },
  hover: {
    y: -15,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
    },
  },
};

export const subMenuAnimate = {
  enter: {
    opacity: 1,
    y: -6,
    transition: {
      duration: 0.3,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const hoverMenuAnimate = {
  enter: {
    opacity: 1,
    y: 5,
    transition: {
      duration: 0.3,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
