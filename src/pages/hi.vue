<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p my-1>
      Hi, {{ props.name }}!
    </p>
    <p op75 text-sm italic>
      <em>Demo of dynamic route</em>
    </p>

    <div m="t-8 b-5">
      <TheCounter />
    </div>

    <div>
      <button m-3 text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
