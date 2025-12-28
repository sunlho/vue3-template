import { AnimationParams } from "animejs"

const callbackKeys = ["onBegin", "onBeforeUpdate", "onUpdate", "onLoop", "onPause", "onComplete", "onRender"] as const

export function mergeAnimationConfig<D extends AnimationParams, C extends AnimationParams>(
  defaultConfig: D,
  customConfig: C,
): AnimationParams {
  const config = {
    ...defaultConfig,
    ...customConfig,
  }

  for (const key of callbackKeys) {
    if (defaultConfig[key] && customConfig[key]) {
      const defaultCallback = defaultConfig[key]
      const customCallback = customConfig[key]
      config[key] = (anim) => {
        defaultCallback(anim)
        customCallback(anim)
      }
    }
  }

  return config
}
