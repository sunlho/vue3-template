import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const lightSpeedInLeft = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: -100, skewX: 20, opacity: 0, easing: "outQuad", duration: 0 },
        {
          translateX: 20,
          skewX: -20,
          opacity: 1,
          easing: "outQuad",
          duration: duration * 0.5,
        },
        { translateX: 0, skewX: 0, easing: "outQuad", duration: duration * 0.5 },
      ],
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "left bottom"
      },
    },
    config,
  )
}

export const lightSpeedInRight = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 100, skewX: -20, opacity: 0, easing: "outQuad", duration: 0 },
        {
          translateX: -20,
          skewX: 20,
          opacity: 1,
          easing: "outQuad",
          duration: duration * 0.5,
        },
        { translateX: 0, skewX: 0, easing: "outQuad", duration: duration * 0.5 },
      ],
    },
    config,
  )
}

export const lightSpeedOutLeft = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, skewX: 0, opacity: 1, easing: "outQuad", duration: 0 },
        {
          translateX: 100,
          skewX: 20,
          opacity: 0,
          easing: "outQuad",
          duration: duration * 0.5,
        },
      ],
    },
    config,
  )
}

export const lightSpeedOutRight = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, skewX: 0, opacity: 1, easing: "outQuad", duration: 0 },
        {
          translateX: -100,
          skewX: -20,
          opacity: 0,
          easing: "outQuad",
          duration: duration * 0.5,
        },
      ],
    },
    config,
  )
}

export default {
  lightSpeedInLeft,
  lightSpeedInRight,
  lightSpeedOutLeft,
  lightSpeedOutRight,
}
