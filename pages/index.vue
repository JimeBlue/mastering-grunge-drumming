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
        class="w-full h-full container py-6 md:py-0 md:flex md:flex-col md:justify-around"
      >
        <h1 class="text-6xl lg:text-8xl font-normal max-w-md text-primary-400 mb-36 md:mb-0">
          Mastering Grunge Drumming
        </h1>
        <NuxtLink to="/cover" class="hidden md:block"
          ><button class="btn btn-primary-animated">
            Our Covers
          </button></NuxtLink
        >
        <p class="text-2xl font-normal max-w-md text-white mb-10 md:pb-6">
          Unlock The Power of Grunge Drums by Covering the Iconic Sounds of the
          90s.
        </p>
        <NuxtLink to="/cover" class="md:hidden"
          ><button class="text-white">
            Our Covers
          </button></NuxtLink
        >
      </hgroup>
    </section>
  </section>
</template>
