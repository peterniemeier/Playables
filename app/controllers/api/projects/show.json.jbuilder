json.project do
  json.partial! '/api/projects/project', project: @project
  json.reviewIds @project.reviews.pluck(:id)
  json.stepIds @project.steps.pluck(:id)
  json.commentIds @project.comments.pluck(:id)
end

@project.stepIds.each do |step|
  json.step do
    json.set! step.id do
      json.partial! 'api/steps/step', step: step
    end
  end

  json.comments do
    json.set! project.comments.id do
      json.extract! comments.body, :body
    end
  end
end
