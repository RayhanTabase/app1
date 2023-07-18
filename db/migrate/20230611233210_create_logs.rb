class CreateLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :logs do |t|
      t.string :title
      t.string :type
      t.string :ref
      t.text :description

      t.timestamps
    end
  end
end
