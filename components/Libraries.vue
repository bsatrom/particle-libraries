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
    <b-pagination
      size="md"
      align="center"
      @input="pageResults"
      :total-rows="this.$store.state.totalRows"
      v-model="currentPage"
      :per-page="this.$store.state.resultsToReturn"
    ></b-pagination>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["libraries"]),
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    async pageResults(page) {
      this.$store.commit("setPage", this.$data.currentPage);
      await this.$store.dispatch("LOAD_LIBRARIES", this.$data.scope);
    }
  }
};
</script>

<style>
.v-list {
  margin-left: 20px;
}

.v-list__tile__content {
  margin-bottom: 10px;
}

.b-pagination {
  margin-top: 1rem;
}

.page-link {
  color: #03aeef;
}

.page-link.btn-primary {
  color: #fff;
  background-color: #03aeef;
}
</style>