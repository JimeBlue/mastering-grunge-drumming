<template>
  <header class="bg-black">
    <div class="container">
      <section class="flex justify-between items-center py-2">
        <hgroup class="flex items-center space-x-1 text-primary-400">
          <IconsDrummer class="w-10 h-10" />
          <h1 class="flex flex-col text-xs">
            <span>Mastering</span> <span>Drumming</span>
          </h1>
        </hgroup>
        <button class="text-2xl" @click="toggleOverlay(true)">
          <IconsMenu class="text-black-500 h-6 w-6 text-white/80" />
        </button>
      </section>
      <transition :duration="550" name="nested">
        <section
          v-if="showOverlay"
          class="outer fixed inset-0 bg-black p-4 overflow-y-auto"
          :class="{ 'z-50': showOverlay }"
        >
          <!-- Overlay's header-->
          <div class="flex justify-between items-center container">
            <hgroup class="flex items-center space-x-1 text-primary-400">
              <IconsDrummer class="w-10 h-10" />
              <h1 class="flex flex-col text-xs">
                <span>Mastering</span> <span>Drumming</span>
              </h1>
            </hgroup>
            <button
              class="text-white/80 text-2xl"
              @click="toggleOverlay(false)"
            >
              <IconsSticks class="w-6 h-6 text-whie" />
            </button>
          </div>
          <!-- Accordion for each band: -->
          <UAccordion
            open-icon="i-heroicons-plus"
            close-icon="i-heroicons-minus"
            :items="bandAccordionItems"
          >
            <template v-for="band in bandAccordionItems" #[band.slot]>
              <!-- content of the slot -->
              <ul>
                <li v-for="song in band.songs" :key="band.slug">
                  <NuxtLink
                    :to="`/cover/band/${band.slug}/song/${song.slug}`"
                    @click="toggleOverlay(false)"
                    >{{ song.title }}</NuxtLink
                  >
                </li>
              </ul>
            </template>
          </UAccordion>
        </section>
      </transition>
    </div>
  </header>
</template>

<script setup>
const { bands } = useCover();

// Open/close overlay
const showOverlay = ref(false);
const toggleOverlay = (state = null) => {
  if (state === null) {
    showOverlay.value = !showOverlay.value;
  } else {
    showOverlay.value = state;
  }
};

// Creates bandAccordionItems array from bands array
const bandAccordionItems = bands.map((band) => ({
  label: band.title,
  icon: 'i-heroicons-information-circle',
  content: `Information about ${band.title}`,
  slug: band.slug,
  slot: band.slug,
  songs: band.songs,
}));
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

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
