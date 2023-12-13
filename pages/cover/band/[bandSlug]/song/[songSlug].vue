<template>
  <section>
    <p class="font-bold">Band: {{ band.title }}</p>
    <h2 class="font-bold">Cover: {{ song.title }}</h2>
    <VideoPlayer v-if="song.videoId" :videoId="song.videoId" />
    <p>{{ song.text }}</p>
    <SongCompleteButton
      :model-value="isSongComplete"
      @update:model-value="toggleComplete"
    />
  </section>
</template>
<script setup>
const covers = useCover();
const route = useRoute();

// Searches for the band that has a slug matching the bandSlug route parameter
const band = computed(() => {
  return covers.bands.find((band) => band.slug === route.params.bandSlug);
});

// Searches for the song that has a slug matching the songSlug route parameter
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

// Functionality for checking song as complete
const progress = useState('progress', () => {
  return [];
});

const isSongComplete = computed(() => {
  if (!progress.value[band.value.number - 1]) {
    return false;
  }
  if (!progress.value[band.value.number - 1][song.value.number - 1]) {
    return false;
  }
  return progress.value[band.value.number - 1][song.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[band.value.number - 1]) {
    progress.value[band.value.number - 1] = [];
  }
  progress.value[band.value.number - 1][song.value.number - 1] =
    !isSongComplete.value;
};
</script>
