class CreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :roles do |t|
      t.string :name
      t.text :description
      t.text :permission

      t.timestamps
    end
  end
end
