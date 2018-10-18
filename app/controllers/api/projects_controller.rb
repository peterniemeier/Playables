class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all

  end

  def create

  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo)
  end
end
