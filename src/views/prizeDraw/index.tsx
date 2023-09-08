import { FunctionalComponent, VNodeRef } from "vue"
import { gsap } from "gsap"
import { Button } from "vant"
import { nameList } from "./name"

const duration = 0.5
const itemHeight = 100
const itemNumber = 3
const itemTotalHeight = itemHeight * itemNumber
const viewHeight = itemHeight + 40

const list = nameList

const winnerIndex = list.findIndex((item, index) => {
  return item == "苗舟琳"
})

const indexThenArr = ref<string[]>([])
const preIndex = ref(0)
const currentIndex = ref(itemNumber)
const suffixIndex = ref(itemNumber * 2)
const preRef = ref<VNodeRef>() as Ref<VNodeRef>
const currentRef = ref<VNodeRef>() as Ref<VNodeRef>
const suffixRef = ref<VNodeRef>() as Ref<VNodeRef>
const preGsap = ref<gsap.core.Tween>() as Ref<gsap.core.Tween>
const currentGsap = ref<gsap.core.Tween>() as Ref<gsap.core.Tween>
const suffixGsap = ref<gsap.core.Tween>() as Ref<gsap.core.Tween>

const generateList = (index: number, ref: VNodeRef | undefined) => {
  return (
    <div class={`flex flex-col items-center absolute`} ref={ref}>
      {new Array(itemNumber).fill(0).map((_, i) => {
        return (
          <div
            class={` p-10px`}
            style={{
              width: "200px",
              height: `${itemHeight}px`,
            }}
          >
            <div class={"bg-#ac45ff flex-center full rd-10px"}>
              {list[index + i]}
            </div>
          </div>
        )
      })}
    </div>
  )
}
const position = ref({
  pre: 1,
  current: 2,
  suffix: 0,
})
const stop = () => {
  isStop.value = true
  const newDuration = (duration / (itemTotalHeight + viewHeight)) * 220
  const animationFrameId = ref()
  if (position.value.pre == 0) {
    preIndex.value = winnerIndex - 1
    preGsap.value = gsap.to(preRef.value, {
      duration: newDuration,
      y: -220,
      ease: "linear",
      onComplete: () => {
        preGsap.value?.pause()
        currentGsap.value?.pause()
        suffixGsap.value?.pause()
      },
    })
    preGsap.value.pause()
  } else if (position.value.pre == 1) {
    suffixIndex.value = winnerIndex - 1
    suffixGsap.value = gsap.to(suffixRef.value, {
      duration: newDuration,
      y: -220,
      ease: "linear",
      onComplete: () => {
        preGsap.value?.pause()
        currentGsap.value?.pause()
        suffixGsap.value?.pause()
        cancelAnimationFrame(animationFrameId.value)
      },
    })
    suffixGsap.value.pause()
  } else {
    currentIndex.value = winnerIndex - 1
    currentGsap.value = gsap.to(currentRef.value, {
      duration: newDuration,
      y: -220,
      ease: "linear",
      onComplete: () => {
        preGsap.value?.pause()
        currentGsap.value?.pause()
        suffixGsap.value?.pause()
      },
    })
    currentGsap.value.pause()
  }
  function update() {
    const preProgress = preGsap.value?.progress() || 0
    const currentProgress = currentGsap.value?.progress() || 0
    const suffixProgress = suffixGsap.value?.progress() || 0
    const progress = preProgress + currentProgress + suffixProgress
    const speed = 1.1 - progress / 3
    preGsap.value?.timeScale(speed)
    currentGsap.value?.timeScale(speed)
    suffixGsap.value?.timeScale(speed)
    animationFrameId.value = requestAnimationFrame(update)
  }
  animationFrameId.value = requestAnimationFrame(update)
}
const isStop = ref<boolean>(false)

watch(preRef, () => {
  gsap.set(preRef.value, {
    y: -220,
  })
})

const handleIndex = (index: Ref<number>, symbol: string) => {
  if (index.value + itemNumber * 3 > list.length - 1) {
    const order = indexThenArr.value.push(symbol) - 1
    index.value = itemNumber * order
    if (indexThenArr.value.length == 3) indexThenArr.value = []
  } else {
    index.value += itemNumber * 3
  }
}

const start = () => {
  preGsap.value = gsap.to(preRef.value, {
    duration: duration,
    y: -itemTotalHeight - viewHeight - 220,
    ease: "linear",
    onComplete: function () {
      gsap.set(preRef.value, {
        y: 0,
      })
      preIndex.value += itemNumber * 3
      preGsap.value.kill()
      preGsap.value = gsap.to(preRef.value, {
        duration: duration,
        y: -itemTotalHeight - viewHeight,
        ease: "linear",
        onComplete: () => {
          position.value.pre = 0
          position.value.current = 1
          position.value.suffix = 2
          if (isStop.value) return
          preGsap.value.progress(0)
          preGsap.value.pause()
          handleIndex(preIndex, "pre")
        },
        onUpdate: () => {
          const preY = preGsap.value.progress() * (itemTotalHeight + viewHeight)
          if (preY >= itemTotalHeight) {
            currentGsap.value.play()
          }
        },
      })
      preGsap.value.pause()
    },
    onUpdate: () => {
      const preY = preGsap.value.progress() * (itemTotalHeight + viewHeight)
      if (preY >= 80 && !currentGsap.value) {
        currentGsap.value = gsap.to(currentRef.value, {
          duration: duration,
          y: -itemTotalHeight - viewHeight,
          ease: "linear",
          onComplete: () => {
            position.value.pre = 2
            position.value.current = 0
            position.value.suffix = 1
            if (isStop.value) return
            currentGsap.value.progress(0)
            currentGsap.value.pause()
            handleIndex(currentIndex, "current")
          },
          onUpdate: () => {
            const currentY =
              currentGsap.value.progress() * (itemTotalHeight + viewHeight)
            if (currentY >= itemTotalHeight && !suffixGsap.value) {
              suffixGsap.value = gsap.to(suffixRef.value, {
                duration: duration,
                y: -itemTotalHeight - viewHeight,
                ease: "linear",
                onComplete: () => {
                  position.value.pre = 1
                  position.value.current = 2
                  position.value.suffix = 0
                  if (isStop.value) return
                  suffixGsap.value.progress(0)
                  suffixGsap.value.pause()
                  handleIndex(suffixIndex, "suffix")
                },
                onUpdate: () => {
                  const suffixY =
                    suffixGsap.value.progress() * (itemTotalHeight + viewHeight)
                  if (suffixY >= itemTotalHeight) {
                    preGsap.value.play()
                  }
                },
              })
            } else if (currentY >= itemTotalHeight) {
              suffixGsap.value.play()
            }
          },
        })
      }
    },
  })
}

export const PrizeDraw: FunctionalComponent = () => {
  return (
    <div class='text-20px full c-white bg-#c1d0c5'>
      <div class={"absolute h-50px"}></div>
      <div
        class={` relative top-200px bg-white overflow-hidden`}
        style={{
          height: `${viewHeight}px`,
        }}
      >
        <div
          class={"relative w-full flex flex-col items-center"}
          style={{
            bottom: `-${viewHeight}px`,
          }}
        >
          {generateList(preIndex.value, preRef)}
          {generateList(currentIndex.value, currentRef)}
          {generateList(suffixIndex.value, suffixRef)}
        </div>
      </div>
      <Button type='primary' class={"text-20px absolute top-0"} onClick={stop}>
        stop
      </Button>
      <Button
        type='primary'
        class={"text-20px absolute top-0 right-0"}
        onClick={start}
      >
        start
      </Button>
    </div>
  )
}

export default PrizeDraw
