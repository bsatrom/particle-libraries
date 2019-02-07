<template>
  <div>
    <b-jumbotron :header="library.id" :lead="library.attributes.sentence">
      <p>
        <small>by {{library.attributes.author}}</small>
        <b-badge variant="primary">{{ library.attributes.version }}</b-badge>
        <b-badge variant="secondary">{{ library.attributes.installs | approximate }}</b-badge>
      </p>
      <template v-if="library.attributes.url">
        <b-btn variant="primary" target="_new" :href="library.attributes.url">View on GitHub</b-btn>
      </template>
    </b-jumbotron>
    <b-container v-if="readme" fluid v-html="readme"></b-container>
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

    try {
      const gitHubUrl = new Url(response.body.data.attributes.url);
      const authorImage = gitHubUrl.pathname.split("/")[1];
      const readme = await axios.get(`${gitHubUrl.pathname}/readme`);

      return {
        library: response.body.data,
        readme: readme.data
      };
    } catch (err) {
      return {
        library: response.body.data,
        readme: null
      };
    }
  }
};
</script>

<style>
.btn-primary {
  background-color: #03aeef;
  border-color: #03aeef;
}

.markdown-body p {
  padding-left: 2rem;
}

.markdown-body h2,
.markdown-body h3,
.markdown-body h4 {
  margin-top: 20px;
}
.markdown-body .highlight {
  padding-left: 1rem;
}
.markdown-body pre {
  overflow-x: auto;
  padding: 15px 20px;
  margin-bottom: 15px;
  background: rgba(3, 174, 239, 0.2);
}

.markdown-body pre,
.markdown-body pre code,
.markdown-body pre code * {
  word-wrap: normal;
  word-break: normal;
  white-space: pre;
}

.entry-content pre {
  margin-left: 1.1rem;
}

li code,
h3 code,
h4 code,
p code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
  color: black;
}

.anchor {
  padding-right: 3px;
}

.anchor > svg {
  visibility: hidden;
  transform-origin: 50% 50% 0px;
}

.anchor:hover > svg {
  visibility: visible;
}
</style>