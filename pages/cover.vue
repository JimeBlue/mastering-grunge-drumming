<template>
  <SiteHeader />
  <NuxtPage />
  <!-- <section class="container">
    <h2 class="font-bold">These are the covers:</h2>

    <ul class="" v-for="band in bands" :key="band.slug">
      <h4>{{ band.title }}</h4>

      <li class="">
        <NuxtLink
          v-for="(song, index) in band.songs"
          :key="song.slug"
          :to="`/cover/band/${band.slug}/song/${song.slug}`"
        >
          <span>{{ song.title }}</span>
        </NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </section> -->
</template>
<script setup>
const { bands } = useCover();
</script>
