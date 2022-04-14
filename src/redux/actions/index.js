import {SET_ART_COUNTER}from"../constants";
// part 2 ACTION DEF

export const setArtCounter = (counter) => (dispatch) => {
    dispatch({
      type: SET_ART_COUNTER,
      payload: counter,
    });
  };
