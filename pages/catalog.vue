<template>
  <h3 class="text-3xl font-bold mb-6">Тестовая задача</h3>
  <div class="flex flex-row flex-wrap gap-[30px] py-1">
    <ProductCard
        v-for="(product, index) in products.products"
        :key="index"
        :image="product.image"
        :oldPrice="Math.round(product.oldPrice)"
        :newPrice="Math.round(product.newPrice)"
        :brand="product.brand"
        :name="product.name"
    />
  </div>
  <Notification />
</template>

<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import {useNuxtApp} from "#app";

const nuxtApp = useNuxtApp();
const products = reactive({products: undefined});

onMounted(async () => {
  const {data, refresh} = await useFetch('/api/catalog/12', {
    key: 'catalog',
    getCachedData: (key) => {
      if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) return nuxtApp.payload.data[key];
      if (nuxtApp.static.data[key]) return nuxtApp.static.data[key];
      return null;
    }
  })
  if (!data.value) await refresh();
  products.products = data.value
})
</script>