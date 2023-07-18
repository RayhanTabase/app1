class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :quantity
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
