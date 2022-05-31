/* Initial state */
const initialState = {
  hidden: false,
  disabled: false,
  lobOptions: false,
  lob: false,
  destination: 0,
  zone: 0,
  results: 0,
};

/* Reducer */
const Reducer = (state = initialState, action) => {
  console.log('reduce', state);

  switch (action.type) {
    case types.SET_LOB:
      return {
        ...state,
        lobOptions: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
