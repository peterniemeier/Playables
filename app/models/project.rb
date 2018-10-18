class Project < ApplicationRecord
validates :title, :description, presence: true
validates :title, length: {minimum: 6, allow_nil: true}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'

  has_many :steps,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Step'

  has_one_attached :photo

  def user_id=(new_user_id)
    self[:user_id] = new_user_id
  end

end
