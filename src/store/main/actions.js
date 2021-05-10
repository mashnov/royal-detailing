export default {
  SET_PAGE_NAME({ commit }, pageName) {
    commit('MUTATE_STATE_FIELD', { field: 'pageName', value: pageName });
  },
};
