import { animate, createTimeline, AnimationParams, utils } from "animejs"
import effect from "./effect"
export { hiddenEffect } from "./effect"

export const handleAnimation = (
  element: HTMLElement | Element | null,
  config: (AnimationParams & {
    value: string
  })[],
) => {
  if (!element) return
  utils.remove(element)
  if (config.length == 1) {
    const item = config[0]
    if (!item.duration) item.duration = 1000
    const animeParams = effect[item.value as keyof typeof effect]?.(item)
    if (animeParams) animate(element, animeParams)
  } else {
    const tl = createTimeline()
    for (const item of config) {
      if (!item.duration) item.duration = 1000
      const animeParams = effect[item.value as keyof typeof effect]?.(item)
      if (animeParams) tl.add(element, animeParams)
    }
  }
}
export const handleRemoveAnimation = (element: HTMLElement | Element | null) => {
  if (!element) return
  utils.remove(element)
}

export function createAndPauseAnimation(
  element: HTMLElement | Element | null,
  config: (AnimationParams & {
    value: string
  })[],
) {
  if (!element) return
  utils.remove(element)
  if (config.length == 1) {
    const item = config[0]
    if (!item.duration) item.duration = 1000
    const animeParams = effect[item.value as keyof typeof effect]?.(item)
    if (animeParams) {
      animeParams.autoplay = false
      const animation = animate(element, animeParams)
      return {
        start: () => animation.play(),
      }
    }
  } else {
    const tl = createTimeline({
      autoplay: false,
    })
    for (const item of config) {
      if (!item.duration) item.duration = 1000
      const animeParams = effect[item.value as keyof typeof effect]?.(item)
      if (animeParams) tl.add(element, animeParams)
    }
    return {
      start: () => tl.play(),
    }
  }
}
