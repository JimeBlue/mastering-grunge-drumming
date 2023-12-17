<template>
  <header class="bg-white p-4">
    <section class="flex justify-between items-center">
      <p>Logo</p>
      <button class="menu-button" @click="showOverlay = true">Menu</button>
    </section>
    <transition>
      <section
        v-if="showOverlay"
        class="outer fixed inset-0 bg-black p-4 md:h-fit md:inset-x-0 md:top-0"
        :class="{ 'z-50': showOverlay }"
      >
        <!-- Overlay's header-->
        <div class="flex justify-between items-center">
          <p class="text-white">Logo</p>
          <button class="text-white" @click="showOverlay = false">Close</button>
        </div>

        <!-- Bands with Collapsibles in songs titles -->

        <div>
          <p class="text-white">Our Bands</p>
          <ul v-for="band in bands" :key="band.slug" class="text-white">
            <div
              class="flex justify-between items-center cursor-pointer p-4 text-white"
              @click="toggle(band.slug)"
            >
              <span>{{ band.title }}</span>
              <span>{{ collapsedSlugs.includes(band.slug) ? '+' : '-' }}</span>
            </div>
            <div
              v-if="!collapsedSlugs.includes(band.slug)"
              class="flex flex-col"
            >
              <NuxtLink
                v-for="(song, index) in band.songs"
                :key="song.slug"
                :to="`/cover/band/${band.slug}/song/${song.slug}`"
                @click="showOverlay = false"
              >
                <span>{{ song.title }}</span>
              </NuxtLink>
            </div>
          </ul>
        </div>
      </section>
    </transition>
  </header>
</template>

<script setup>
const { bands } = useCover();

const showOverlay = ref(false);

// Functionality for collapsibles
const collapsedSlugs = ref([]);
const toggle = (slug) => {
  const index = collapsedSlugs.value.indexOf(slug);
  if (index > -1) {
    collapsedSlugs.value.splice(index, 1);
  } else {
    collapsedSlugs.value.push(slug);
  }
};
</script>
<style scope>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

@media (min-width: 768px) {
  .v-enter-from,
  .v-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>
