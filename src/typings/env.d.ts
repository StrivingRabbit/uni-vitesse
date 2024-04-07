/// <reference types="vite/client" />
/// <reference path="../../node_modules/miniprogram-api-typings/index.d.ts" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
