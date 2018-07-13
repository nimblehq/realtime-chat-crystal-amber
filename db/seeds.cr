require "../config/application.cr"

user = User.new
user.email = "admin@nimbl3.com"
user.password = "Antikera1234"
user.save
