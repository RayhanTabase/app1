class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :email, presence: true, uniqueness: true
  # validates :first_name, presence: true
  # validates :last_name, presence: true
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true, allow_nil: true

  # has_secure_password
  has_many :user_roles
  has_many :roles, through: :user_roles
  
end
