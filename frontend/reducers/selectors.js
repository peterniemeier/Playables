import values from 'lodash/values';


export const selectProject = ({ projects }, projectId) => {
  return projects[projectId] || { commentIds: [] };
};

export const selectAllProjects = state => values(state.entities.projects);

export const selectComments = ({ benches, comments }, project) => {
  return project.commentIds.map(commentId => comments[commentId]);
};
export const asArray = ({ projects }) => (
  Object.keys(projects).map(key => projects[key])
);
