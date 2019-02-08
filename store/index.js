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
  ],
  oauth: {
    accessToken: null
  }
});

export const mutations = {
  setLibraries(state, libraries) {
    state.libraries = libraries;
  }
};

export const actions = {
  async LOAD_LIBRARIES({ commit, state }, scope) {
    const response = await particle.listLibraries({
      limit: 25,
      scope: scope,
      auth: state.oauth.accessToken || process.env.PARTICLE_TOKEN
    });

    const libraries = response.body.data;

    commit('setLibraries', libraries);
  }
};
