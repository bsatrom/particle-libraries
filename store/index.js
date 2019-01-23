import particle from '~/plugins/particle';

export const state = () => ({
  libraries: [
    {
      id: 0,
      attributes: {
        url: 'https://foo.com',
        author: 'Brandon Satrom',
        name: 'Foo Lib'
      }
    }
  ]
});

export const mutations = {
  setLibraries(state, libraries) {
    state.libraries = libraries;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await particle.listLibraries({
      limit: 5,
      scope: 'official',
      auth: process.env.PARTICLE_TOKEN
    });

    const libraries = response.body.data;

    commit('setLibraries', libraries);
  }
};
