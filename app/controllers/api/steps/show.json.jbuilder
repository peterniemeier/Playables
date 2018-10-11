json.step do
  json.partial! '/api/steps/step', step: @step
end

json.author do
  json.partial! '/api/users/user', user: @step.user_id
end

json.average_rating @review.bench.average_rating
