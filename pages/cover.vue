<template>
  <section class="container">
    <h2 class="font-bold">These are the covers:</h2>
    <p>Pick a band a cover</p>

    <ul
      class="space-y-1 mb-4 flex flex-col"
      v-for="band in bands"
      :key="band.slug"
    >
      <h4>{{ band.title }}</h4>

      <li class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="(song, index) in band.songs"
          :key="song.slug"
          :to="`/cover/band/${band.slug}/song/${song.slug}`"
          class="w-full"
        >
          <span>{{ song.title }}</span>
          <NuxtImg :src="`/images/${song.image}`" class="w-full" />
        </NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </section>
</template>
<script setup>
const { bands } = useCover();
</script>
