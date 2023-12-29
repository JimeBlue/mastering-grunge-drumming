<template>
  <iframe
    class="w-full h-full xs:h-[300px] sm:h-[500px] lg:h-[800px]"
    :src="`https://www.youtube.com/embed/${props.videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
</script>
