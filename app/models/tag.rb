class Tag < ApplicationRecord
  validates :name, uniqueness: true
  scope :categories, -> { where(type: 'category') }
end
