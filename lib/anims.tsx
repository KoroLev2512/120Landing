const anim_reveal_child = {
  hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", bounce: 0.3 },
  },
};

const anim_reveal_parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const anim_reveal_pattern = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", bounce: 0 },
  },
};

export { anim_reveal_child, anim_reveal_parent, anim_reveal_pattern };
