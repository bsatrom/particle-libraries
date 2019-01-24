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
  async LOAD_LIBRARIES({ commit }, scope) {
    const response = await particle.listLibraries({
      limit: 25,
      scope: scope,
      auth: process.env.PARTICLE_TOKEN
    });

    const libraries = response.body.data;

    commit('setLibraries', libraries);
  }
};
