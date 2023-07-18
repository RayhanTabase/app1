json.extract! user, :id, :first_name, :last_name, :other_names, :email, :phone_number, :password_digest, :is_admin, :created_at, :updated_at
json.url user_url(user, format: :json)
