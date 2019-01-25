<template>
  <div>
    <header>
      <nav class="flex w-75 justify-around f4 pa1">
        <nuxt-link class="link underline-hover" to="/">Public</nuxt-link>
        <nuxt-link class="link underline-hover" to="/official">Official</nuxt-link>
        <nuxt-link class="link underline-hover" to="/verified">Verified</nuxt-link>
      </nav>
    </header>
    <h2 class="code f3">The Amazing Particle Libraries Registry!</h2>
    <nuxt></nuxt>
  </div>
</template>

<style>
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>