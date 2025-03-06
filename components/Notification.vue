<template>
  <div v-if="appStore.showNotification" class="fixed bottom-10 right-10 bg-pink-400 z-10 p-6 text-white rounded-2xl text-sm">
    Товар добавлен в <span class="underline">корзину</span>
  </div>
</template>

<script setup lang="ts">
import {useApplicationStore} from "~/store/application";

const appStore = useApplicationStore()
const NOTIFICATION_DURATION = 1000

let timer: number;

watch(
    () => appStore.showNotification,
    (newVal) => {
      if (newVal) {
        clearTimeout(timer); // отменяем предыдущий таймер, если есть
        timer = setTimeout(() => {
          appStore.showNotification = false;
        }, NOTIFICATION_DURATION);
      }
    }
);
</script>

<style scoped>

</style>