class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all

  end

  def create
    project = Project.new(project_params)
    project.user_id = current_user.id

    if project.save
      render '/'
    else
      render json: project.errors.full_messages
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo)
  end
end
