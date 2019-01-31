<template>
  <div>
    <b-jumbotron :header="library.id" :lead="library.attributes.sentence">
      <template v-if="library.attributes.url">
        <b-btn variant="primary" target="_new" :href="library.attributes.url">View on GitHub</b-btn>
      </template>
    </b-jumbotron>
    <div class="pa1" v-html="readme"></div>
  </div>
</template>

<script>
import particle from "~/plugins/particle";
import axios from "~/plugins/axios";
import Url from "url-parse";

export default {
  async asyncData({ route }) {
    const response = await particle.getLibrary({
      name: route.params.id,
      auth: process.env.PARTICLE_TOKEN
    });

    const gitHubUrl = new Url(response.body.data.attributes.url);
    const readme = await axios.get(`${gitHubUrl.pathname}/readme`);

    return { library: response.body.data, readme: readme.data };
  }
};
</script>