class CreateAttributes < ActiveRecord::Migration[7.0]
  def change
    create_table :attributes do |t|
      t.string :name
      t.string :value
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
