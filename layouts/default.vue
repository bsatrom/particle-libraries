<template>
  <div>
    <b-navbar class="parti-header" toggleable="md" type="dark" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">Particle Firmware Libraries Registry</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/" exact>Public</b-nav-item>
          <b-nav-item to="/official">Official</b-nav-item>
          <b-nav-item to="/verified">Verified</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt></nuxt>
  </div>
</template>

<style>
a {
  color: #03aeef;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 1);
}

.router-link-exact-active,
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

.parti-header,
.badge-primary {
  background-color: #03aeef;
}
</style>