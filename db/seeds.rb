# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Create admin user
user = User.new(email: "s@s.com", is_admin: true)
user.password = "superman"
user.save

# Create user
user1 = User.new(email: "n@n.com")
user1.password = "password"
user1.save

# Create Category Tags
category = Tag.new(name: "Drugs", description: "these are drugs", nature: "category")
category.save

category1 = Tag.new(name: "Mixtures", description: "these are mixtures", nature: "category")
category1.save

category2 = Tag.new(name: "kids", description: "these are mixtures", nature: "tag")
category2.save