/* eslint-disable @typescript-eslint/ban-ts-comment */
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import {
  type Preset,
  defineConfig,
  presetIcons,
} from 'unocss'

type Theme = Record<string, any>

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp() as Preset<Theme>,
    presetWeappAttributify() as Preset<Theme>,
  ],
  shortcuts: [
    ['center', 'flex justify-center items-center'],
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})
