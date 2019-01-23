<template>
  <div>
    <h2>The Amazing Particle Libraries Registry!</h2>
    <ul>
      <li v-for="library in libraries" :key="library.id">
        <a :href="library.attributes.url" target="_new">{{library.attributes.name}}</a>
        by {{library.attributes.author}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["libraries"])
};
</script>