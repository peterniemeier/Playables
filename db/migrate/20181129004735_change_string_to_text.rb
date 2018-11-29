class ChangeStringToText < ActiveRecord::Migration[5.2]
  def change
    remove_column "projects", :description
    add_column "projects", :description, :text
  end
end
