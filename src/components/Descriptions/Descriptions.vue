<script setup lang="ts">
import { computed, provide, ref } from "vue"
import { useElementSize } from "@vueuse/core"
import { labelTextNumKey, labelWidthKey, responsiveColumnKey } from "./key"

export interface Responsive {
  xs?: number // <576px 响应式栅格
  sm?: number // ≥576px 响应式栅格
  md?: number // ≥768px 响应式栅格
  lg?: number // ≥992px 响应式栅格
  xl?: number // ≥1200px 响应式栅格
  xxl?: number // ≥1600px 响应式栅格
}
export interface Props {
  column?: number | Responsive
  labelWidth?: number
  dense?: boolean
  labelTextNum?: number
}
const props = withDefaults(defineProps<Props>(), {
  column: 1,
  labelWidth: 90,
})
const descriptionsWrapRef = ref<HTMLDivElement>()

const { width: viewportWidth } = useElementSize(descriptionsWrapRef)

const responsiveColumn = computed(() => {
  if (typeof props.column === "object") {
    if (viewportWidth.value >= 1600 && props.column.xxl !== undefined) {
      return props.column.xxl
    }
    if (viewportWidth.value >= 1200 && props.column.xl !== undefined) {
      return props.column.xl
    }
    if (viewportWidth.value >= 992 && props.column.lg !== undefined) {
      return props.column.lg
    }
    if (viewportWidth.value >= 768 && props.column.md !== undefined) {
      return props.column.md
    }
    if (viewportWidth.value >= 576 && props.column.sm !== undefined) {
      return props.column.sm
    }
    if (viewportWidth.value < 576 && props.column.xs !== undefined) {
      return props.column.xs
    }
    return 1
  }
  return props.column
})

provide(responsiveColumnKey, responsiveColumn)
provide(
  labelWidthKey,
  computed(() => props.labelWidth),
)
provide(
  labelTextNumKey,
  computed(() => props.labelTextNum),
)

const style = computed(() => {
  return {
    "grid-template-columns": `repeat(${responsiveColumn.value}, minmax(0, 1fr))`,
    "grid-auto-flow": props.dense ? "row dense" : "row",
  }
})
</script>
<template>
  <div ref="descriptionsWrapRef" class="descriptions-wrap">
    <div class="descriptions-view" :style="style" :data-column="responsiveColumn">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.descriptions-wrap {
  .descriptions-view {
    width: 100%;
    border-radius: 4px;
    display: grid;
    border: 1px solid #ebeef5;
    overflow: hidden;
    position: relative;
  }
}
</style>
