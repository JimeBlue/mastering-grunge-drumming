<template>
  <section class="container py-6 bg-mineGray text-gray-100">
    <NuxtLink  to="/cover">
      <hgroup class="mb-6 space-y-2">
        <NuxtImg
        :src="`/images/${band.logo}`"
        :alt="`logo of ${band.title}`"
        :class="band.logo_classes"
        />
        <h2 class="flex items-center space-x-1"> <IconsArrow class="w-6 h-6 text-primary-400" /><span class="font-bold text-xl md:text-3xl hover:text-primary-400 transition-colors">{{ song.title }}</span></h2>
      </hgroup>
    </NuxtLink>
    <VideoPlayer v-if="song.videoId" :videoId="song.videoId" />
  
    <article class="mt-6 space-y-10">
      <p>{{ song.text }}</p>
      <SongCompleteButton
        :model-value="isSongComplete"
        @update:model-value="toggleComplete"
        class="block"
      />
    </article>
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
const progress = useLocalStorage('progress', []);

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
