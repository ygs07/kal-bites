<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const showNewLogo = ref(false);
let logoInterval: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  logoInterval = setInterval(() => {
    showNewLogo.value = !showNewLogo.value;
  }, 4000);
});

onBeforeUnmount(() => {
  if (logoInterval) {
    clearInterval(logoInterval);
  }
});
</script>

<template>
  <div
    class="relative flex min-h-48 w-56 items-center justify-center sm:min-h-56 sm:w-72"
  >
    <div
      class="absolute inset-0 flex flex-col items-center justify-center gap-3 transition duration-500 ease-out"
      :class="showNewLogo ? 'scale-95 opacity-0' : 'scale-100 opacity-100'"
      :aria-hidden="showNewLogo"
    >
      <img
        src="/images/logo.svg"
        alt="Kal Bites"
        class="h-auto w-32 sm:w-40"
        decoding="sync"
        loading="eager"
      />
      <p class="font-display text-4xl leading-none text-primary sm:text-5xl">
        KalBites
      </p>
    </div>

    <img
      src="/images/logo_new.svg"
      alt="KalBites"
      class="h-auto w-44 transition duration-500 ease-out sm:w-56"
      :class="showNewLogo ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      :aria-hidden="!showNewLogo"
      decoding="sync"
      loading="eager"
    />
  </div>
</template>
