<template>
  <header class="bg-indigo-600">
    <nav class="container px-6 py-8 mx-auto">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400"
          >Logo
        </NuxtLink>
        <div @click="toggleNav" class="flex">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        v-if="showMenu"
        v-for="band in bands"
        :key="band.slug"
        class="flex-col mt-8 space-y-4"
      >
        <li class="text-gray-100 hover:text-indigo-400">
          <div class="relative" @click="toggleMenu(band.slug)">
            <button class="py-5 px-3 inline-flex items-center">
              <span>{{ band.title }}</span>
              <svg
                class="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <NuxtLink
              v-for="(song, index) in band.songs"
              :key="song.slug"
              v-if="menusOpenRefs[band.slug].value"
              :to="`/cover/band/${band.slug}/song/${song.slug}`"
              class="overflow-hidden flex flex-col"
            >
              <a href="#" class="block px-4 py-2 text-black">{{
                song.title
              }}</a>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
const { bands } = useCover();

// functionality to open/close navbar
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

// functionality for collapsibles
const menusOpenRefs = {};
bands.forEach((band) => {
  menusOpenRefs[band.slug] = ref(false);
});
const toggleMenu = (slug) => {
  menusOpenRefs[slug].value = !menusOpenRefs[slug].value;
};
</script>
<style scope>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
