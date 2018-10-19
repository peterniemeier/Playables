class Api::StepsController < ApplicationController
  def create
    step = Step.new(step_params)
    step.project_id = Project.last.id

    if step.save
      render '/'
    else
      render json: project.errors.full_messages
    end
  end

  def step_params
    params.require(:step).permit(:body, :photo)
  end

end
