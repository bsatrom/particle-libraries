<template>
  <div>
    <b-jumbotron :header="library.id" :lead="library.attributes.sentence">
      <template v-if="library.attributes.url">
        <b-btn variant="primary" target="_new" :href="library.attributes.url">View on GitHub</b-btn>
      </template>
    </b-jumbotron>
  </div>
</template>

<script>
import particle from "~/plugins/particle";

export default {
  async asyncData({ route }) {
    const response = await particle.getLibrary({
      name: route.params.id,
      auth: process.env.PARTICLE_TOKEN
    });

    return { library: response.body.data };
  }
};
</script>