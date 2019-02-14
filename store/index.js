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
  searchTerm: '',
  searchScope: 'public',
  api: {
    tokenCode: null,
    token: null
  }
});

export const mutations = {
  setLibraries(state, libraries) {
    state.libraries = libraries;
  },
  setTokenCode(state, tokenCode) {
    state.api.tokenCode = tokenCode;
  },
  setAccessToken(state, accessToken) {
    state.api.token = accessToken;
  },
  setSearchFilter(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
  setSearchScope(state, searchScope) {
    state.searchScope = searchScope;
  }
};

export const actions = {
  async LOAD_LIBRARIES({ commit, state }, scope) {
    const response = await particle.listLibraries({
      limit: 25,
      scope: scope,
      filter: state.searchTerm,
      auth: state.api.token
        ? state.api.token['access_token']
        : process.env.PARTICLE_TOKEN
    });

    const libraries = response.body.data;

    commit('setLibraries', libraries);
    commit('setSearchScope', scope);
  }
};
