import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const zoomIn = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [0.3, 1],
      opacity: [0, 1],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomInDown = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [0.3, 1],
      opacity: [0, 1],
      translateY: [300, 0],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomInLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [0.3, 1],
      opacity: [0, 1],
      translateX: [-300, 0],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomInRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [0.3, 1],
      opacity: [0, 1],
      translateX: [300, 0],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomInUp = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [0.3, 1],
      opacity: [0, 1],
      translateY: [-300, 0],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomOut = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [1, 0.3],
      opacity: [1, 0],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomOutDown = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [1, 0.3],
      opacity: [1, 0],
      translateY: [0, 300],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomOutLeft = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [1, 0.3],
      opacity: [1, 0],
      translateX: [0, -300],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomOutRight = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [1, 0.3],
      opacity: [1, 0],
      translateX: [0, 300],
      easing: "outQuad",
    },
    config,
  )
}

export const zoomOutUp = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      scale: [1, 0.3],
      opacity: [1, 0],
      translateY: [0, -300],
      easing: "outQuad",
    },
    config,
  )
}

export default {
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
}
