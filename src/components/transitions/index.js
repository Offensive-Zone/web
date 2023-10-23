
  
export const slideInTransition = {
  visible:{
      opacity:1,
      x:'0',
      transition:{
        duration: 0.6,
      }
  },
  hidden:{ x: '30vw', opacity:0},
}

export const fadeTransition = {
  visible:{
      opacity:1,
      transition:{
        duration: 0.5,
        delay: 0.2,
      }
  },
  hidden:{ opacity: 0},
}