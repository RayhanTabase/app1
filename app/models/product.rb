class Product < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_one_attached :image, dependent: :destroy
  # has_one_attached :image do |attachable|
  #   attachable.variant :thumb, resize_to_limit: [100, 100]
  # end
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  belongs_to :user
  belongs_to :category, class_name: 'Tag', optional: true
end
