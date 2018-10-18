class Step < ApplicationRecord
validates :body, :project_id, presence: true

end
