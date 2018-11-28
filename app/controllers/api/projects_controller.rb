require 'byebug'
require 'json'
class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all

  end

  def create
    project_steps = JSON.parse(params["project"]["steps"])
    project = Project.new(project_params)
    project.user_id = current_user.id
    byebug
    if project.save
      project_steps.each do |step|
        step["project_id"] = project.id
        new_step = Step.new(project_id: step["project_id"], body: step["body"], photo: step["photoFile"])
        new_step.save
      end
      # puts "PROJECT ID: " + project.id
      render '/'
    else
      render json: project.errors.full_messages
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo,)
  end
end
