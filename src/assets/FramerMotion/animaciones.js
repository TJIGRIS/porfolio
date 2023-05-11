export const animacionApararicion = (d) => {
  return {
    inicio: {
      width: "100%",
    },
    ver: {
      width: 0,

      transition: {
        type: "tween",
        duration: 1,
        delay: d,
      },
    },
  };
};

export const animacionHover = () => {
  return {
    inicio: {
      opacity: 1,
    },

    ver: {
      opacity: 0.5,

      transition: {
        duration: 1,
      },
    },
  };
};
