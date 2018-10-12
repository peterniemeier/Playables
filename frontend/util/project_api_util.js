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
    url: `api/benches/${id}`
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
    data: { step }
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
