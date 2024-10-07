<template>
  <div class="main-app" ref="highlightElement" @mousemove="setHighlight">
    <NuxtRouteAnnouncer v-if="false" />
    <NuxtWelcome v-if="false" />
    <NuxtPage />
  </div>
</template>
<script setup>
const highlightElement = ref();
const setHighlight = (e) => {
  if(window.innerWidth > 1024){
    highlightElement.value.style = `background: radial-gradient(800px at ${e.screenX}px ${e.screenY+window.scrollY}px, rgba(29, 78, 216, 0.25), transparent 80%);`
  }else{
    highlightElement.value.style = `background: initial`
  }
}
</script>
