<template>
  <div class="pa3">
    <header>
      <h2 class="code f3">The Amazing Particle Libraries Registry!</h2>
      <b-nav fill class="f4">
        <b-nav-item>
          <nuxt-link to="/">Public</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link to="/official">Official</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link to="/verified">Verified</nuxt-link>
        </b-nav-item>
      </b-nav>
    </header>
    <nuxt></nuxt>
  </div>
</template>

<style>
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>