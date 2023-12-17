<template>
  <header class="bg-white p-4">
    <section class="flex justify-between items-center">
      <p>Logo</p>
      <button class="menu-button" @click="showOverlay = true">Menu</button>
    </section>
    <transition :duration="550" name="nested">
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

        <div class="px-10 inner">
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
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* transition nested elements  */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>
