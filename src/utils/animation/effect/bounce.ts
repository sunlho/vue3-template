import { AnimationParams } from "animejs"
import { mergeAnimationConfig } from "../utils"

export const bounce = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration) * 0.16
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateY: -30, easing: "outQuad", duration },
        { translateY: 0, easing: "inQuad", duration },
        { translateY: -15, easing: "outQuad", duration },
        { translateY: 0, easing: "inQuad", duration },
        { translateY: -10, easing: "outQuad", duration },
        { translateY: 0, easing: "inQuad", duration },
      ],
    },
    config,
  )
}

export const bounceIn = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { scale: 0, opacity: 0, duration: 0 },
        { scale: 0.3, opacity: 0, easing: "outSine", duration: duration * 0.22 },
        {
          scale: 1.05,
          opacity: 1,
          easing: "inOutQuad",
          duration: duration * 0.17,
        },
        { scale: 0.9, easing: "inOutQuad", duration: duration * 0.17 },
        { scale: 1.05, easing: "inOutQuad", duration: duration * 0.17 },
        { scale: 1, easing: "inOutQuad", duration: duration * 0.27 },
      ],
    },
    config,
  )
}

export const bounceInLeft = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, opacity: 0, duration: 0 },
        {
          opacity: 0,
          translateX: -400,
          easing: "outSine",
          duration: duration * 0.22,
        },
        {
          opacity: 1,
          translateX: 25,
          easing: "inOutQuad",
          duration: duration * 0.17,
        },
        { translateX: -10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: 5, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: 0, easing: "inOutQuad", duration: duration * 0.27 },
      ],
    },
    config,
  )
}

export const bounceInRight = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, opacity: 0, duration: 0 },
        {
          opacity: 0,
          translateX: 400,
          easing: "outSine",
          duration: duration * 0.22,
        },
        {
          opacity: 1,
          translateX: -25,
          easing: "inOutQuad",
          duration: duration * 0.17,
        },
        { translateX: 10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: -5, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: 0, easing: "inOutQuad", duration: duration * 0.27 },
      ],
    },
    config,
  )
}

export const bounceInUp = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateY: 0, opacity: 0, duration: 0 },
        {
          opacity: 0,
          translateY: 400,
          easing: "outSine",
          duration: duration * 0.22,
        },
        {
          opacity: 1,
          translateY: -25,
          easing: "inOutQuad",
          duration: duration * 0.17,
        },
        { translateY: 10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: -5, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: 0, easing: "inOutQuad", duration: duration * 0.27 },
      ],
    },
    config,
  )
}

export const bounceInDown = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateY: 0, opacity: 0, duration: 0 },
        {
          opacity: 0,
          translateY: -400,
          easing: "outSine",
          duration: duration * 0.22,
        },
        {
          opacity: 1,
          translateY: 25,
          easing: "inOutQuad",
          duration: duration * 0.17,
        },
        { translateY: -10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: 5, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: 0, easing: "inOutQuad", duration: duration * 0.27 },
      ],
    },
    config,
  )
}

export const bounceOut = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { scale: 1, opacity: 1, duration: 1 },
        { scale: 1, easing: "inOutQuad", duration: duration * 0.27 },
        { scale: 1.05, easing: "inOutQuad", duration: duration * 0.17 },
        { scale: 0.9, easing: "inOutQuad", duration: duration * 0.17 },
        {
          scale: 1.05,
          opacity: 1,
          easing: "inOutQuad",
          duration: duration * 0.17,
        },
        { scale: 0.3, opacity: 0, easing: "outSine", duration: duration * 0.22 },
      ],
    },
    config,
  )
}

export const bounceOutLeft = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, opacity: 1, duration: 1 },
        { translateX: 10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: -25, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: 25, easing: "inOutQuad", duration: duration * 0.17 },
        {
          translateX: -400,
          opacity: 0,
          easing: "outSine",
          duration: duration * 0.22,
        },
        { translateX: 0, opacity: 0, duration: 0 },
      ],
    },
    config,
  )
}

export const bounceOutRight = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateX: 0, opacity: 1, duration: 1 },
        { translateX: -10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: 25, easing: "inOutQuad", duration: duration * 0.17 },
        { translateX: -25, easing: "inOutQuad", duration: duration * 0.17 },
        {
          translateX: 400,
          opacity: 0,
          easing: "outSine",
          duration: duration * 0.22,
        },
        { translateX: 0, opacity: 0, duration: 0 },
      ],
    },
    config,
  )
}

export const bounceOutUp = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateY: 0, opacity: 1, duration: 1 },
        { translateY: -10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: 25, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: -25, easing: "inOutQuad", duration: duration * 0.17 },
        {
          translateY: -400,
          opacity: 0,
          easing: "outSine",
          duration: duration * 0.22,
        },
        { translateY: 0, opacity: 0, duration: 0 },
      ],
    },
    config,
  )
}

export const bounceOutDown = (config: AnimationParams): AnimationParams => {
  const duration = Number(config.duration)
  return mergeAnimationConfig(
    {
      keyframes: [
        { translateY: 0, opacity: 1, duration: 1 },
        { translateY: 10, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: -25, easing: "inOutQuad", duration: duration * 0.17 },
        { translateY: 25, easing: "inOutQuad", duration: duration * 0.17 },
        {
          translateY: 400,
          opacity: 0,
          easing: "outSine",
          duration: duration * 0.22,
        },
        { translateY: 0, opacity: 0, duration: 0 },
      ],
    },
    config,
  )
}

export default {
  bounce,
  bounceIn,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceInDown,
  bounceOut,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  bounceOutDown,
}
