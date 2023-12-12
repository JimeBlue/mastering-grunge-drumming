<template>
  <section>
    <h1>Song</h1>
    <p>This is the video for a song</p>
    <p>Band slug: {{ $route.params.bandSlug }}</p>
    <p>Song slug: {{ $route.params.songSlug }}</p>
  </section>
</template>
