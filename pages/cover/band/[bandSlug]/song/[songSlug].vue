<template>
  <section>
    <h1>Song</h1>
    <p>This is the cover for:</p>
    <p>{{ band.title }}</p>
    <p>{{ song.title }}</p>
  </section>
</template>
<script setup>
const covers = useCover();
const route = useRoute();
console.log(covers);

// Searches for the band that has a slug matching the bandSlug route parameter
const band = computed(() => {
  return covers.bands.find((band) => band.slug === route.params.bandSlug);
});

// // Searches for the song that has a slug matching the songSlug route parameter
const song = computed(() => {
  return band.value.songs.find((song) => song.slug === route.params.songSlug);
});
</script>
