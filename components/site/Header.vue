<template>
  <header class="bg-black">
    <div class="container">
      <section class="flex justify-between items-center py-2">
        <!-- logo -->
          <NuxtLink to="/" >
            <NuxtImg
                  src="/images/logo-white.png"
                  alt="mastering drumming"
                  class="w-28 h-16 object-contain"
                />
          </NuxtLink>
        <button class="text-2xl" @click="toggleOverlay(true)">
          <IconsMenu class="h-8 w-8 text-white" />
        </button>
      </section>
      <transition :duration="550" name="nested">
        <section
          v-if="showOverlay"
          class="outer fixed inset-0 bg-mineGray overflow-y-auto"
          :class="{ 'z-50': showOverlay }"
        >
          <!-- Overlay's header-->
          <div class="bg-black">
            <header class="flex justify-between items-center container p-4">
              <NuxtLink to="/" >
                 <NuxtImg
                src="/images/logo-white.png"
                alt="mastering drumming"
                class="w-32 h-16 object-contain"
                 />
              </NuxtLink>
              <button
                class="text-white/80 text-2xl"
                @click="toggleOverlay(false)"
              >
                <IconsSticks class="w-8 h-8 text-whie" />
              </button>
            </header>
          </div>
          <!-- Accordion for each band: -->
          <UAccordion
            open-icon="i-heroicons-plus"
            close-icon="i-heroicons-minus"
            :items="bandAccordionItems"
            class="container"
          >
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost" class="border-b border-gray-100 bg-transpatent hover:bg-transparent text-gray-100 hover:text-primary-400" :ui="{ rounded: 'rounded-none', padding: { sm: 'py-6 px-0' } }">
              
              <span class="truncate uppercase" :class="open ? 'text-primary-400' : ''">{{ item.label }}</span>
              <template #trailing>
                <UIcon
                 name="i-heroicons-chevron-right-20-solid"
                 class="w-5 h-5 ms-auto transform transition-transform duration-200"
                 :class="[open && 'rotate-90']"
          />
              </template>
            </UButton>
          </template>
          
            <template v-for="band in bandAccordionItems" #[band.slot]>
              <!-- content of the slot -->
              <ul class="space-y-4">
                <li v-for="song in band.songs" :key="band.slug">
                  <NuxtLink
                    :to="`/cover/band/${band.slug}/song/${song.slug}`"
                    @click="toggleOverlay(false)"
                    class="text-gray-100 hover:text-primary-500 text-base pl-4 uppercase"
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
