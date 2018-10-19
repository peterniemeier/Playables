import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const UPDATE_STATE = 'UPDATE_STATE';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const updateState = (state) => ({
  type: UPDATE_STATE,
  state
});

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveComments = ({ comment, author }) => ({
  type: RECEIVE_COMMENTS,
  comment,
  author,
});


export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(receiveComments(comment))
  ))
);

export const fetchProjects = filters => dispatch => (
  APIUtil.fetchProjects(filters).then(projects => (
    dispatch(receiveProjects(projects))
  ))
);

export const fetchSteps = id => dispatch => (
  APIUtil.fetchSteps(id).then(steps => (
    dispatch(receiveSteps(steps))
  ))
);

export const createSteps = steps => dispatch => (
  APIUtil.createStep(steps).then(steps => (
    dispatch(receiveSteps(steps))
  ))
);

export const fetchProject = id => dispatch => (
  APIUtil.fetchProject(id).then(payload => (
    dispatch(receiveProject(payload))
  ))
);

export const createProject = project => dispatch => (
  APIUtil.createProject(project).then(project => (
    dispatch(receiveProject(project))
  ))
);
