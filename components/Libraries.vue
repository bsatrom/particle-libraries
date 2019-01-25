<template>
  <div>
    <v-list two-line>
      <template v-for="library in libraries">
        <v-list-title :key="library.id">
          <v-list-tile-content :key="library.id">
            <a :href="library.attributes.url" target="_new">
              <v-list-tile-title v-html="library.attributes.name">{{library.attributes.name}}</v-list-tile-title>
            </a>
            by {{library.attributes.author}}
            <v-list-tile-sub-title v-html="library.attributes.sentence"></v-list-tile-sub-title>
            <v-list-tile-action>
              <v-list-tile-action-text>
                Version : {{ library.attributes.version }}
                | Installs: {{ library.attributes.installs | formatNumber }}
              </v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile-content>
        </v-list-title>
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