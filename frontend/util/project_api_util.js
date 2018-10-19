export const fetchProjects = data => (
  $.ajax({
    method: 'GET',
    url: 'api/projects',
    data
  })
);

export const fetchProject = id => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  })
);

export const createStep = step => (
  $.ajax({
    method: 'POST',
    url: 'api/steps',
    data: step,
    contentType: false,
    processData: false
  })
);

export const fetchSteps = id => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}/steps`
  })
);

export const createProject = project => (
  $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: project,
    contentType: false,
    processData: false
  })
);
