@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description
    json.extract! project.user, :username
  end
end
