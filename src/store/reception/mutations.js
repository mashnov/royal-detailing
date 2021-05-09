export default {
  MUTATE_STATE_FIELD: (state, { field, value }) => {
    state[field] = value;
  },
};
