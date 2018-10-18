class Api::StepsController < ApplicationController


  def step_params
    params.require(:step).permit(:body, :photo)
  end

end
