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
          <b-nav-item to="/mine" v-if="loggedIn">Mine</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="searchLibs">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              type="text"
              v-model="searchTerm"
              placeholder="Search"
            />
            <b-button size="sm" class="my-2 my-sm-0" @click="searchLibs">Search</b-button>
          </b-nav-form>
          <b-nav-item @click="logout" v-if="loggedIn">Log Out</b-nav-item>
          <b-nav-item @click="login" v-else>Log In</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt></nuxt>
  </div>
</template>

<script>
import { particleAPI } from "~/plugins/axios";

export default {
  asyncData({ app }) {
    app.$login();
  },
  computed: {
    loggedIn() {
      return this.$store.state.api.token;
    }
  },
  data() {
    return {
      searchTerm: "",
      clientId: process.env.OAUTH_CLIENT_ID,
      secret: process.env.OAUTH_CLIENT_SECRET
    };
  },
  methods: {
    login() {
      this.$login();
    },
    logout() {
      this.$logout("/");
    },
    async searchLibs(e) {
      e.preventDefault();

      this.$store.commit("setSearchFilter", this.$data.searchTerm);

      await this.$store.dispatch("LOAD_LIBRARIES", this.$data.scope);
    }
  },
  async mounted() {
    console.log("PROC Datas: ", this.$data.clientId);
    if (this.$route.query.code) {
      this.$store.commit("setTokenCode", this.$route.query.code);

      try {
        const response = await particleAPI.post(
          "oauth/token",
          `grant_type=authorization_code&client_id=${
            this.$data.clientId
          }&client_secret=${this.$data.clientSecret}&code=${
            this.$route.query.code
          }`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );

        this.$store.commit("setAccessToken", response.data);
      } catch (err) {
        console.log("Unable to obtain token: ", err);
      }
    }
  }
};
</script>

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