const submit = () => {
  return {
    type: 'SET_DATA',
    action: action.payload,
  };
};

export { submit };
