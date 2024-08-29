export const reducers = {
  restore: () => {},
  setAppLoading: (state, action) => {
    state.appLoading = action.payload;
  },
};
