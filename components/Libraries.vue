<template>
  <div>
    <h2 class="code f3">The Amazing Particle Libraries Registry!</h2>
    <v-list two-line>
      <template v-for="library in libraries">
        <v-list-tile-content :key="library.id">
          <a :href="library.attributes.url" target="_new">
            <v-list-tile-title v-html="library.attributes.name">{{library.attributes.name}}</v-list-tile-title>
          </a>
          by {{library.attributes.author}}
          <v-list-tile-sub-title v-html="library.attributes.sentence"></v-list-tile-sub-title>
        </v-list-tile-content>
      </template>
    </v-list>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["libraries"])
};
</script>

<style>
.v-list {
  margin-left: 20px;
}

.v-list__tile__content {
  margin-bottom: 10px;
}
</style>