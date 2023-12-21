<template>
  <section class="relative w-full h-screen overflow-hidden">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
      poster="~/assets/img/poster.jpg"
    >
      <source src="~/assets/videos/hero.mp4" type="video/mp4" />
      <source src="~/assets/videos/hero.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <section class="absolute top-0 left-0 w-full h-full">
      <SiteHeader />
      <hgroup
        class="w-full h-full container flex flex-col justify-around items-start"
      >
        <h1 class="text-6xl lg:text-8xl font-normal max-w-md text-primary-400">
          Mastering Grunge Drumming
        </h1>
        <NuxtLink to="/cover"
          ><button class="hidden md:block text-white">
            Our Covers
          </button></NuxtLink
        >
        <p class="text-2xl font-normal max-w-md text-white">
          Unlock The Power of Grunge Drums by Covering the Iconic Sounds of the
          90s.
        </p>
      </hgroup>
    </section>
  </section>
</template>
