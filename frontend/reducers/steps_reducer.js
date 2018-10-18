import merge from 'lodash/merge';

import {
  RECEIVE_STEPS

} from '../actions/project_actions';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STEPS:
      return merge({}, state, action.steps);

    default:
      return state;
  }
};

export default stepsReducer;
