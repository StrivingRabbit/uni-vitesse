<template>
  <div flex="~ gap-4" mt-5 text-xl justify-center>
    <div title="Home" @click="router.replace('/index')">
      <div i-carbon-campsite icon-btn />
    </div>

    <div title="SubPages" @click="router.push('~/pages-sub/index')">
      <div i-carbon-sub-volume icon-btn />
    </div>

    <div icon-btn title="Toogle dark mode" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </div>

    <div icon-btn title="GitHub" @click="router.push('https://github.com/StrivingRabbit/uni-vitesse')">
      <div i-carbon-logo-github />
    </div>
  </div>
</template>
