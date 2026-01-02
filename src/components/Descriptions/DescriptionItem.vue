<script setup lang="ts">
import { computed, inject, ref, type CSSProperties } from "vue"
import { labelTextNumKey, labelWidthKey, responsiveColumnKey } from "./key"

export interface Props {
  label?: string
  span?: number | "full"
  labelStyle?: CSSProperties
  contentStyle?: CSSProperties
  labelTextNum?: number
}

const props = withDefaults(defineProps<Props>(), {
  span: 1,
  labelStyle: () => ({}),
  contentStyle: () => ({}),
})

const responsiveColumn = inject(responsiveColumnKey, ref(0))
const labelWidth = inject(labelWidthKey, ref(90))
const _labelTextNum = inject(labelTextNumKey, ref<number | undefined>())

const labelTextNum = computed(() => {
  return props.labelTextNum || _labelTextNum.value
})

const style = computed(() => {
  const gridColumn = props.span == "full" || responsiveColumn.value <= props.span ? `1 / -1` : `span ${props.span}`

  return {
    "grid-column": gridColumn,
  }
})

const labelStyle = computed(() => {
  return {
    width: `${labelWidth.value}px`,
    ...props.labelStyle,
  }
})

const textStyle = computed<CSSProperties>(() => {
  if (labelTextNum.value) {
    return {
      textAlign: "justify",
      textAlignLast: "justify",
      textJustify: "distribute",
      width: `${labelTextNum.value}em`,
    }
  }
  return {}
})
</script>

<template>
  <div class="descriptions-item" :data-span="span" :style="style">
    <div class="descriptions-label" :style="labelStyle">
      <span :style="textStyle">
        <slot name="label">{{ label }}</slot>
      </span>
    </div>
    <div class="descriptions-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.descriptions-item {
  display: flex;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin-top: -1px;
    border-top: 1px solid #ebeef5;
    pointer-events: none;
    z-index: 2000;
  }

  .descriptions-label {
    position: relative;
    width: 90px;
    padding: 8px 10px;
    padding-top: 9px;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    color: #606266;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: end;
    background-color: #f5f7fa;
    flex-shrink: 0;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -1px;
      bottom: 0;
      right: 0;
      border-left: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
      pointer-events: none;
      z-index: 2000;
    }
  }
  .descriptions-content {
    padding: 8px 10px;
    padding-top: 9px;
    padding-right: 11px;
    display: inline-flex;
    align-items: center;
    flex: 1;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 20px;
    word-break: break-word;
    overflow-wrap: break-word;
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>
