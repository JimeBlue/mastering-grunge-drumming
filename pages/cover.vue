<template>
  <section>
    <p class="font-bold">These are the covers:</p>
    <div
      class="space-y-1 mb-4 flex flex-col"
      v-for="band in bands"
      :key="band.slug"
    >
      <h4>{{ band.title }}</h4>
      <NuxtLink
        v-for="(song, index) in band.songs"
        :key="song.slug"
        class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
        :to="`/cover/band/${band.slug}/song/${song.slug}`"
      >
        <span class="text-gray-500">{{ index + 1 }}.</span>
        <span>{{ song.title }}</span>
      </NuxtLink>
    </div>
    <NuxtPage />
  </section>
</template>
<script setup>
const { bands } = useCover();
</script>
