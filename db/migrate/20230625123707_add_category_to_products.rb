class AddCategoryToProducts < ActiveRecord::Migration[7.0]
  def change
    add_reference :products, :tag, null: true, foreign_key: true
  end
end
