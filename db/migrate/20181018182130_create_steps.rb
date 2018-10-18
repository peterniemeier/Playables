class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :body, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :steps, :project_id, unique: true
  end
end
