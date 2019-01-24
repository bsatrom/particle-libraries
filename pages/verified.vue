<template>
  <div>
    <Libraries></Libraries>
  </div>
</template>

<script>
import Libraries from "~/components/Libraries.vue";

export default {
  components: {
    Libraries
  },
  async fetch({ store }) {
    await store.dispatch("LOAD_LIBRARIES", "verified");
  }
};
</script>