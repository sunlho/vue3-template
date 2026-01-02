import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const flash = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      opacity: [1, 0, 1, 0, 1],
      easing: "inOutQuad",
    },
    config,
  )
}

export const rubberBand = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration) * 0.25
  return mergeAnimationConfig(
    {
      keyframes: [
        { scaleX: 1, scaleY: 1, duration: 0, easing: "outSine" },
        { scaleX: 1.25, scaleY: 0.75, duration, easing: "outSine" },
        { scaleX: 0.75, scaleY: 1.25, duration, easing: "outSine" },
        { scaleX: 1.15, scaleY: 0.85, duration, easing: "outSine" },
        { scaleX: 1, scaleY: 1, duration, easing: "outSine" },
      ],
      easing: "outElastic(1,.5)",
    },
    config,
  )
}

export const shakeX = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, easing: "inOutQuad" },
        { translateX: -15, easing: "inOutQuad" },
        { translateX: 15, easing: "inOutQuad" },
        { translateX: -15, easing: "inOutQuad" },
        { translateX: 15, easing: "inOutQuad" },
        { translateX: 0, easing: "inOutQuad" },
      ],
    },
    config,
  )
}

export const shakeY = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateY: 0, easing: "inOutQuad" },
        { translateY: -15, easing: "inOutQuad" },
        { translateY: 15, easing: "inOutQuad" },
        { translateY: -15, easing: "inOutQuad" },
        { translateY: 15, easing: "inOutQuad" },
        { translateY: 0, easing: "inOutQuad" },
      ],
    },
    config,
  )
}

export const headShake = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, easing: "outSine" },
        { translateX: -5, easing: "outSine" },
        { translateX: 5, easing: "outSine" },
        { translateX: -5, easing: "outSine" },
        { translateX: 5, easing: "outSine" },
        { translateX: -5, easing: "outSine" },
        { translateX: 0, easing: "outSine" },
      ],
    },
    config,
  )
}

export const swing = (config: AnimationParams): AnimationParams => {
  return mergeAnimationConfig(
    {
      keyframes: [
        { rotate: 0, easing: "inOutSine" },
        { rotate: 15, easing: "inOutSine" },
        { rotate: -10, easing: "inOutSine" },
        { rotate: 5, easing: "inOutSine" },
        { rotate: -5, easing: "inOutSine" },
        { rotate: 0, easing: "inOutSine" },
      ],
      onBegin: (anim) => {
        anim.targets[0].style.transformOrigin = "top center"
      },
      onComplete: (anim) => {
        anim.targets[0].style.transformOrigin = "center"
      },
    },
    config,
  )
}

export const tada = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { scale: 1, rotate: 0, duration: 0 },
        { scale: 1.2, rotate: 0, duration: duration * 0.4, easing: "outExpo" },
        { rotate: 10, duration: duration * 0.05, easing: "inOutSine" },
        { rotate: -10, duration: duration * 0.05, easing: "inOutSine" },
        { rotate: 10, duration: duration * 0.05, easing: "inOutSine" },
        { rotate: -10, duration: duration * 0.05, easing: "inOutSine" },
        { rotate: 0, duration: duration * 0.05, easing: "inOutSine" },
        { scale: 1, duration: duration * 0.4, easing: "outExpo" },
      ],
    },
    config,
  )
}

export const jello = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { skewX: 0, skewY: 0, duration: 0 },
        {
          skewX: -12.5,
          skewY: -12.5,
          duration: duration * 0.2,
          easing: "outSine",
        },
        { skewX: 6.25, skewY: 6.25, duration: duration * 0.2, easing: "outSine" },
        {
          skewX: -3.125,
          skewY: -3.125,
          duration: duration * 0.2,
          easing: "outSine",
        },
        {
          skewX: 1.5625,
          skewY: 1.5625,
          duration: duration * 0.2,
          easing: "outSine",
        },
        { skewX: 0, skewY: 0, duration: duration * 0.2, easing: "outSine" },
      ],
    },
    config,
  )
}

export default {
  flash,
  rubberBand,
  shakeX,
  shakeY,
  headShake,
  swing,
  tada,
  jello,
}
