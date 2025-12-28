import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const flipInX = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotateX: [-90, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const flipInY = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotateY: [90, 0],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const flipOutX = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotateX: [0, 90],
      opacity: [1, 0],
      easing: "outQuad",
    },
    config,
  )
}

export const flipOutY = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      rotateY: [0, 90],
      opacity: [1, 0],
      easing: "outQuad",
    },
    config,
  )
}

export default {
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
}
