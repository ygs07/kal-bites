<script setup lang="ts">
import { onMounted, ref, computed } from "vue";

type GalleryImage = {
  src: string;
  heightClass: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/images/IMG_7065.jpeg", heightClass: "h-64 sm:h-72 lg:h-80" },
  { src: "/images/IMG_8669.jpg", heightClass: "h-80 sm:h-96 lg:h-[28rem]" },
  { src: "/images/IMG_3304.jpg", heightClass: "h-56 sm:h-64 lg:h-72" },
  {
    src: "/images/copy_95CC4F10-F83B-4CC8-8A8B-DE5BAF9ACCF6.jpeg",
    heightClass: "h-72 sm:h-80 lg:h-96",
  },
  { src: "/images/IMG_8657.jpg", heightClass: "h-72 sm:h-80 lg:h-96" },
  { src: "/images/IMG_7080.jpeg", heightClass: "h-60 sm:h-72 lg:h-80" },
  {
    src: "/images/IMG_1288.jpeg",
    heightClass: "h-80 sm:h-[26rem] lg:h-[30rem]",
  },
  { src: "/images/IMG_3601.JPG", heightClass: "h-64 sm:h-80 lg:h-96" },
  { src: "/images/IMG_0441.jpeg", heightClass: "h-56 sm:h-72 lg:h-80" },
  { src: "/images/IMG_1290.jpeg", heightClass: "h-56 sm:h-64 lg:h-72" },
  { src: "/images/IMG_2424.jpeg", heightClass: "h-72 sm:h-96 lg:h-[28rem]" },
  { src: "/images/IMG_8291.jpeg", heightClass: "h-60 sm:h-72 lg:h-80" },
  { src: "/images/IMG_4299.jpeg", heightClass: "h-52 sm:h-60 lg:h-64" },
  {
    src: "/images/IMG_0453.jpeg",
    heightClass: "h-80 sm:h-[26rem] lg:h-[30rem]",
  },
];

const shuffledGalleryImages = ref<GalleryImage[]>([...galleryImages]);

const shuffleImages = (images: GalleryImage[]) => {
  const shuffled = [...images];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const currentImage = shuffled[index];

    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = currentImage;
  }

  return shuffled;
};

const column1 = computed(() =>
  shuffledGalleryImages.value.filter((_, i) => i % 3 === 0)
);
const column2 = computed(() =>
  shuffledGalleryImages.value.filter((_, i) => i % 3 === 1)
);
const column3 = computed(() =>
  shuffledGalleryImages.value.filter((_, i) => i % 3 === 2)
);

const row1 = computed(() =>
  shuffledGalleryImages.value.filter((_, i) => i % 2 === 0)
);
const row2 = computed(() =>
  shuffledGalleryImages.value.filter((_, i) => i % 2 === 1)
);

onMounted(() => {
  shuffledGalleryImages.value = shuffleImages(galleryImages);
});
</script>

<template>
  <div class="min-h-screen bg-secondary font-sans text-primary">
    <NuxtRouteAnnouncer />
    <main
      class="grid min-h-screen lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <section
        class="flex min-h-[56vh] flex-col items-center justify-center bg-secondary bg-[url('/images/bg-pattern-1.svg')] px-6 py-12 text-center sm:px-10 lg:sticky lg:top-0 lg:min-h-screen lg:px-14"
      >
        <AppLogo class="mb-10" />
        <p
          class="max-w-xl text-5xl font-extrabold leading-none sm:text-7xl md:text-8xl"
        >
          Something is Baking
        </p>
        <footer class="mt-8 text-sm font-semibold text-primary/80 sm:text-base">
          Kal Bites is coming soon.
        </footer>
      </section>

      <section
        class="relative overflow-hidden bg-primary/10 lg:h-screen lg:px-4"
        aria-label="Kal Bites bakery gallery"
      >
        <!-- Mobile/Tablet Horizontal Infinite Scroll -->
        <div class="flex flex-col gap-4 py-8 lg:hidden">
          <div
            v-for="(row, rowIdx) in [row1, row2]"
            :key="rowIdx"
            class="marquee-container-x"
          >
            <div
              class="marquee-content-x flex gap-4"
              :class="
                rowIdx % 2 === 0
                  ? 'animate-marquee-x'
                  : 'animate-marquee-x-reverse'
              "
              :style="{ animationDuration: `${20 + rowIdx * 10}s` }"
            >
              <!-- First set -->
              <img
                v-for="(image, imgIdx) in row"
                :key="`${image.src}-m1`"
                :src="image.src"
                alt="Kal Bites bakery item"
                class="h-48 w-64 flex-shrink-0 rounded-lg bg-primary/10 object-cover shadow-md shadow-primary/20"
              />
              <!-- Duplicate set for seamless loop -->
              <img
                v-for="(image, imgIdx) in row"
                :key="`${image.src}-m2`"
                :src="image.src"
                alt="Kal Bites bakery item"
                class="h-48 w-64 flex-shrink-0 rounded-lg bg-primary/10 object-cover shadow-md shadow-primary/20"
              />
            </div>
          </div>
        </div>

        <!-- Desktop Vertical Infinite Scroll -->
        <div class="hidden h-full grid-cols-3 gap-4 lg:grid">
          <div
            v-for="(col, colIdx) in [column1, column2, column3]"
            :key="colIdx"
            class="marquee-container"
          >
            <div
              class="marquee-content flex flex-col gap-4"
              :class="
                colIdx % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
              "
              :style="{ animationDuration: `${30 + colIdx * 5}s` }"
            >
              <!-- First set -->
              <img
                v-for="(image, imgIdx) in col"
                :key="`${image.src}-1`"
                :src="image.src"
                alt="Kal Bites bakery item"
                class="w-full rounded-xl bg-primary/10 object-cover shadow-lg shadow-primary/20 transition-transform duration-500 hover:scale-[1.05] hover:z-10"
                :class="image.heightClass"
              />
              <!-- Duplicate set for seamless loop -->
              <img
                v-for="(image, imgIdx) in col"
                :key="`${image.src}-2`"
                :src="image.src"
                alt="Kal Bites bakery item"
                class="w-full rounded-xl bg-primary/10 object-cover shadow-lg shadow-primary/20 transition-transform duration-500 hover:scale-[1.05] hover:z-10"
                :class="image.heightClass"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.animate-card-entrance {
  animation: card-entrance 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes card-entrance {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.marquee-container,
.marquee-container-x {
  @apply relative overflow-hidden;
}

.marquee-container {
  @apply h-full;
}

.marquee-content {
  @apply py-4;
}

.marquee-content-x {
  @apply w-max;
}

.marquee-container:hover .marquee-content,
.marquee-container-x:hover .marquee-content-x {
  animation-play-state: paused;
}

.animate-marquee {
  animation: marquee linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse linear infinite;
}

.animate-marquee-x {
  animation: marquee-x linear infinite;
}

.animate-marquee-x-reverse {
  animation: marquee-x-reverse linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes marquee-x {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-x-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
