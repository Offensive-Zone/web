export const loop = {
    visible: { x: "-102%", transition:{
      duration: 20,
      ease: ease,
      repeat: Infinity,} },
    hidden: { x: translate },
  };
  
export const slideInTransition = {
  visible:{
      x:'0',
      transition:{
        duration: 0.6,
      }
  },
  hidden:{ x: '100vw'},
}

export const fadeTransition = {
  visible:{
      opacity:1,
      transition:{
        duration: 1,
        delay: 0.2,
      }
  },
  hidden:{ opacity: 0},
}