<template>
  <section class="relative w-full h-screen overflow-hidden">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="~/assets/videos/hero.mp4" type="video/mp4" />
      <source src="~/assets/videos/hero.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <section
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
    >
      <hgroup class="text-white text-center">
        <h1 class="text-4xl font-bold">Mastering Grunge</h1>
      </hgroup>
    </section>
  </section>
</template>
