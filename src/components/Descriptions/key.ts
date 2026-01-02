import { ComputedRef, InjectionKey } from "vue"

export const responsiveColumnKey = Symbol("responsiveColumn") as InjectionKey<ComputedRef<number>>

export const labelWidthKey = Symbol("labelWidth") as InjectionKey<ComputedRef<number>>

export const labelTextNumKey = Symbol("labelTextNum") as InjectionKey<ComputedRef<number | undefined>>
