import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveComments = ({ review, author }) => ({
  type: RECEIVE_COMMENTS,
  review,
  author,
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(receiveComments(comment))
  ))
);

export const fetchProjects = filters => dispatch => (
  APIUtil.fetchBenches(filters).then(projects => (
    dispatch(receiveProjects(projects))
  ))
);

export const fetchProject = id => dispatch => (
  APIUtil.fetchBench(id).then(payload => (
    dispatch(receiveProject(payload))
  ))
);

export const createProject = project => dispatch => (
  APIUtil.createProject(project).then(project => (
    dispatch(receiveProject(project))
  ))
);
