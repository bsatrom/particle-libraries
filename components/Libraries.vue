<template>
  <div>
    <b-list-group>
      <b-list-group-item
        class="flex-column align-items-start"
        v-for="library in libraries"
        :key="library.id"
        :href="'/library/' + library.id"
      >
        <div>
          <h5 class="mb-1">
            {{library.attributes.name}}
            <b-badge variant="primary">{{ library.attributes.version }}</b-badge>
            <b-badge variant="secondary">{{ library.attributes.installs | approximate }}</b-badge>
          </h5>
          <small>by {{library.attributes.author}}</small>
        </div>
        <p class="mb-1">{{library.attributes.sentence}}</p>
        <small>
          <a :href="library.attributes.url" target="_new">{{library.attributes.url}}</a>
        </small>
      </b-list-group-item>
    </b-list-group>
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