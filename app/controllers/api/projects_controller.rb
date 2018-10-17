class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end
end
