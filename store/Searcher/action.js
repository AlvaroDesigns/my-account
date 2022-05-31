/* ==========================================================================
   Searcher > Store > Reducer
   ========================================================================== */

/* Modules */
const { types } = require('./actions');

/* Initial state */
const initialState = {
  disabled: false,
  lobOptions: false,
  destination: [],
  zone: [],
  tagsOptions: false,
  tags: false,
};

/* Reducer */
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.DESTROY:
    case types.LOCK:
      return {
        ...state,
        lock: true,
      };
    case types.ON_LOAD:
      return {
        ...state,
        load: true,
      };
    case types.OFF_LOAD:
      return {
        ...state,
        load: false,
      };
    default:
      return state;
  }
}

/* Exports */
export default reducer;
