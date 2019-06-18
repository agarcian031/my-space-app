20.times do
  User.create( 
  name:  Faker::Name.name, 
  nickname: Faker::Internet.username, 
  image: Faker::Avatar.image,
  email: Faker::Internet.email, 
  password: "password"
  ) 
end 

puts "Users Created"