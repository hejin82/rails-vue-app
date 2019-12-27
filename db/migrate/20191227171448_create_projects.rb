class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :desc
      t.integer :creator
      t.integer :owner

      t.timestamps
    end
  end
end
