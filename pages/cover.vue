<template>
  <div class="bg-mineGray">
    <SiteHeader />
    <div class="container">
      <section class="py-16 space-y-10">
        <hgroup class="text-center space-y-4">
          <h2 class="text-4xl tracking-wider uppercase text-brightYellow">
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
                  class="w-full aspect-square"
                />
              </header>
              <article
                class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 bg-gray-800 text-white p-6 group-hover:opacity-100"
              >
                <h3 class="uppercase text-xl mb-4">{{ band.title }}</h3>
                <div class="flex flex-col">
                  <NuxtLink
                    v-for="(song, index) in band.songs"
                    :key="song.slug"
                    :to="`/cover/band/${band.slug}/song/${song.slug}`"
                    class="flex items-center space-x-4 py-4 border-b border-slate-600"
                    @mouseenter="hoveredSong = song.slug"
                    @mouseleave="hoveredSong = null"
                  >
                    <h4
                      :class="[
                        'text-lg transition-all ease-in-out',
                        hoveredSong === song.slug ? 'text-contrast' : '',
                      ]"
                    >
                      {{ song.title }}
                    </h4>
                    <NuxtImg
                      src="/images/sticks.png"
                      :class="[
                        'w-16',
                        hoveredSong === song.slug ? 'animate-pulse' : '',
                      ]"
                    />
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
