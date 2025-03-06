<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow flex flex-col justify-center bg-white px-10 py-5">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application'
import { apiPath } from '~/utils/api'
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const { welcome } = useApplicationStore()

const { believe } = await $fetch(apiPath.hello)
</script>
