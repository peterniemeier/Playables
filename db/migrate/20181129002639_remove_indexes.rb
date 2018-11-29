class RemoveIndexes < ActiveRecord::Migration[5.2]
  def change
    remove_index "projects", name: "index_projects_on_title"
    remove_index "steps", name: "index_steps_on_project_id"
  end
end
