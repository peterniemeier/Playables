import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_COMMENTS, RECEIVE_STEPS, RECEIVE_TAGS, RECEIVE_PROJECT } from '../actions/project_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_COMMENTS:
      return merge({}, state, { [action.author.id]: action.author });
    case RECEIVE_PROJECT:
      return merge({}, state, action.authors);
    default:
      return state;
  }
};

export default usersReducer;
