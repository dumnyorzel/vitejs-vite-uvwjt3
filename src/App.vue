<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mainRef = ref(null);
let userWidth = ref(0);

const onWindowResize = () => {
  if (mainRef) userWidth.value = mainRef.value.getBoundingClientRect().width;
};

onMounted(() => {
  window.addEventListener('resize', onWindowResize);
  if (mainRef) userWidth.value = mainRef.value.getBoundingClientRect().width;
});
</script>

<template>
  <main ref="mainRef" class="p-4">
    <p>User width: {{ userWidth }}px</p>
    <div class="hidden md:block purple">Visible on desktop</div>
    <div class="md:hidden yellow">Visible on mobile</div>
  </main>
</template>

<style scoped>
div {
  height: 100px;
  width: 100px;
  padding: 5px;
  margin-bottom: 10px;
}

.purple {
  background-color: purple;
}

@media screen and (max-width: 767px) {
  .yellow {
    color: darkgray;
    background-color: yellow;
  }
}
</style>
