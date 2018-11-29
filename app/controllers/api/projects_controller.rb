require 'byebug'
require 'json'
class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all

  end

  def create
    project_steps = JSON.parse(params["project"]["steps"])

    project = Project.new(title: params["project"]["title"], description: params["project"]["description"], photo: params["project"]["photo"])

    project.user_id = current_user.id
    # byebug
    if project.save!
      project_steps.each do |step|
        # byebug
        step["project_id"] = project.id
        new_step = Step.new(:project_id => step["project_id"], :body => step["body"], :photo => step["photoFile"])
        new_step.save
      end
      puts "PROJECT ID: #{project.id}"
    else
      render json: project.errors.full_messages
    end
    # render '/'
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo, :steps)
  end
end
