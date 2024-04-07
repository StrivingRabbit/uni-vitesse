import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'

import { setupStore } from './store'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app,
    Pinia,
  }
}
