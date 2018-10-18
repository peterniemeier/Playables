@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description
    json.photoUrl url_for(project.photo)
    json.extract! project.user, :username
  end
end
