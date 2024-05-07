<script setup lang="ts">
import { useCounterStore } from '@/store'

const counter = useCounterStore()
</script>

<template>
  <div flex gap-8 justify-center items-center>
    <div class="count-btn" @click="counter.dec()">
      -
    </div>
    <span font-mono>{{ counter.count }}</span>
    <div class="count-btn" @click="counter.inc()">
      +
    </div>
  </div>
</template>

<style lang="scss" scoped>
.count-btn {
  --uno: h-8 w-8 center rd-full p-0 btn;
}
</style>
