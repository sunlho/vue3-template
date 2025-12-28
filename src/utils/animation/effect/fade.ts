import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const fadeIn = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      opacity: [0, 1],
      easing: "inOutQuad",
    },
    config,
  )
}

export const fadeInUp = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInDown = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInUpBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [500, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInDownBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [-500, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInLeftBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [-500, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeInRightBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [500, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const fadeOut = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      opacity: [1, 0],
      easing: "inOutQuad",
    },
    config,
  )
}

export const fadeOutUp = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutDown = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [0, 100],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [0, -100],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [0, 100],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutUpBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [0, -500],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutDownBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateY: [0, 500],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutLeftBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [0, -500],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const fadeOutRightBig = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      translateX: [0, 500],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInLeftBig,
  fadeInDownBig,
  fadeInUpBig,
  fadeInRightBig,
  fadeOut,
  fadeOutUp,
  fadeOutDown,
  fadeOutLeft,
  fadeOutRight,
  fadeOutLeftBig,
  fadeOutDownBig,
  fadeOutUpBig,
  fadeOutRightBig,
}
