<template>
  <div class="relative">
    <div class="card w-50 bg-white overflow-hidden">
      <div class="card-body relative">
        <div class="relative">
          <img :src="image" alt="Product" class="w-full h-50 object-cover rounded-xl">

          <div v-if="oldPrice" class="absolute bottom-1.5 left-1.5 px-1.5 py-1 bg-white text-pink-500 rounded-sm text-xs">
            -{{ discount }}%
          </div>
        </div>

        <div class="mt-3">
          <div>
            <span class="font-bold">{{ newPrice }} ₽&nbsp;</span>
            <span class="text-xs text-gray-500 line-through" v-if="oldPrice">{{ oldPrice }} ₽</span>
          </div>
          <p class="font-semibold">{{ brand }}</p>
          <p class="text-sm line-clamp-2 overflow-ellipsis">{{ name }}</p>
        </div>
      </div>
      <button class="toCart bg-black text-white text-sm rounded-lg px-6 py-3 absolute top-[110%] cursor-pointer z-5 transform opacity-0 scale-90 transition-all duration-300" @click="toCartClick">В корзину</button>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useApplicationStore} from "~/store/application.js";

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  oldPrice: {
    type: Number,
    required: false,
    default: null
  },
  newPrice: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const discount = computed(() => Math.round(100 - props.newPrice / (props.oldPrice / 100)))

const appStore = useApplicationStore()
function toCartClick() {
  appStore.showNotification = true;
}
</script>

<style scoped>
.card:hover:before {
  content: '';
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 140%;
  border-radius: 16px;
  z-index: 1;
  background-color: white;
}

.card:hover .card-body {
  z-index: 5;
}

.card:hover .toCart {
  opacity: 1;
  scale: 100%;
}
</style>