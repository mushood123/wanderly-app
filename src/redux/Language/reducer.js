export const reducers = {
  setLanguage: (state, action) => {
    state.locale = action.payload;
  },
};
