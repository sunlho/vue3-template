import { defineConfig } from "unocss"
import { presetUno } from "unocss"
import transformerVariantGroup from "@unocss/transformer-variant-group"

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      /^ma-(.+)-(.+)$/,
      ([, a, b]) => ({
        margin: `${a} ${b}`,
      }),
    ],
    [
      /^pa-(.+)-(.+)$/,
      ([, a, b]) => ({
        padding: `${a} ${b}`,
      }),
    ],
    [
      /^px-(.+)-(.+)$/,
      ([, a, b]) => ({
        "padding-left": `${a}`,
        "padding-right": `${b}`,
      }),
    ],
    [
      /^py-(.+)-(.+)$/,
      ([, a, b]) => ({
        "padding-top": `${a}`,
        "padding-bottom": `${b}`,
      }),
    ],
    [
      /^w-calc-(.+)-(.+)$/,
      ([, a, b]) => ({
        width: `calc(${a} - ${b})`,
      }),
    ],
    [
      /^left-calc-(.+)-(.+)$/,
      ([, a, b]) => ({
        left: `calc(${a} - ${b})`,
      }),
    ],
    [
      /^ff-fz$/,
      () => ({
        "font-family": "FZLTHJW",
        "font-weight": "normal",
      }),
    ],
    [
      /^ff-fz-b$/,
      () => ({
        "font-family": "FZLTZCHJW",
        "font-weight": "normal",
      }),
    ],
    [
      /^an-rotation$/,
      () => ({
        animation: "rotation 5s linear infinite",
        "animation-play-state": "paused",
      }),
    ],
  ],
  shortcuts: [
    {
      full: "w-full h-full",
      "abs-full": "absolute inset-0",
      "flex-center": "flex items-center justify-center",
      "abs-center": "absolute top-50% left-50% translate--50%",
    },
  ],
  //@ts-ignore
  transformers: [transformerVariantGroup()],
})
