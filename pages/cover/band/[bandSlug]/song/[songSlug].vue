<template>
  <section>
    <p class="font-bold">Band: {{ band.title }}</p>
    <h2 class="font-bold">Cover: {{ song.title }}</h2>
    <VideoPlayer v-if="song.videoId" :videoId="song.videoId" />
    <p>{{ song.text }}</p>
  </section>
</template>
<script setup>
const covers = useCover();
const route = useRoute();

// Searches for the band that has a slug matching the bandSlug route parameter
const band = computed(() => {
  return covers.bands.find((band) => band.slug === route.params.bandSlug);
});

// // Searches for the song that has a slug matching the songSlug route parameter
const song = computed(() => {
  return band.value.songs.find((song) => song.slug === route.params.songSlug);
});

// Calculates title of the page
const title = computed(() => {
  return `${song.value.title} - ${band.value.title}`;
});

useHead({
  title,
});
</script>
