import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const rotateIn = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [-180, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const rotateInDownLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [-90, 0],
      opacity: [0, 1],
      easing: "outQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "left bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateInDownRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [90, 0],
      opacity: [0, 1],
      easing: "outQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "right bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateInUpLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [90, 0],
      opacity: [0, 1],
      easing: "outQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "left bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateInUpRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [-90, 0],
      opacity: [0, 1],
      easing: "outQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "right bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateOut = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [0, 180],
      opacity: [1, 0],
      easing: "inQuad",
    },
    config,
  )
}

export const rotateOutDownLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [0, 90],
      opacity: [1, 0],
      easing: "inQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "left bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateOutDownRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [0, -90],
      opacity: [1, 0],
      easing: "inQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "right bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateOutUpLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [0, -90],
      opacity: [1, 0],
      easing: "inQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "left bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const rotateOutUpRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotate: [0, 90],
      opacity: { from: 1, to: 0 },
      easing: "inQuad",
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "right bottom"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export default {
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
}
