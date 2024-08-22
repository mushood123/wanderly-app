export const reducers = {
  setAllOffers: (state, action) => {
    state.allOffers = action.payload;
  },
  setCreatedOffers: (state, action) => {
    state.createdOffer = action.payload;
  },
  setAcceptedPackage: (state, action) => {
    state.acceptedPackage = action.payload;
  },
  setModalVisibility: (state, action) => {
    state.modalVisibility = action.payload;
  },
};
