<template>
  <div class="bg-mineGray">
    <SiteHeader />

    <div class="container" v-if="$route.name === 'cover'">
      <section class="py-16 space-y-10">
        <hgroup class="text-center space-y-4">
          <h2 class="text-4xl tracking-wider uppercase text-primary-400">
            bands and covers
          </h2>
          <p class="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quos! Ea reiciendis, similique consequatur facilis eaque natus.
            Suscipit nam fugiat earum labore nisi iure velit sequi recusandae
            ipsum, necessitatibus facilis.
          </p>
        </hgroup>

        <div
          class="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ul v-for="band in bands">
            <li class="relative group">
              <header class="header">
                <NuxtImg
                  :src="`/images/${band.image}.jpeg`"
                  :alt="`image of the band ${band.title}`"
                  class="w-full aspect-square text-white"
                />
              </header>
              <article
                class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 bg-gray-800 text-white p-6 group-hover:opacity-100"
              >
                <NuxtImg
                  :src="`/images/${band.logo}`"
                  :alt="`logo of ${band.title}`"
                  :class="band.logo_classes"
                />
                <div class="flex flex-col">
                  <NuxtLink
                    v-for="(song, index) in band.songs"
                    :key="song.slug"
                    :to="`/cover/band/${band.slug}/song/${song.slug}`"
                    class="flex items-center space-x-4 py-4"
                    @mouseenter="hoveredSong = song.slug"
                    @mouseleave="hoveredSong = null"
                  >
                    <h4
                      :class="[
                        'text-lg uppercase text-primary-400 hover-underline-animation',
                        hoveredSong === song.slug ? '' : '',
                      ]"
                    >
                      {{ song.title }}
                    </h4>
                  </NuxtLink>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
const { bands } = useCover();

const hoveredSong = ref(null);
</script>
<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
}
.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: -2px;
  left: 0;
  background-color: #f8b822;
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
