20.times do
  name = Faker::Name.name
  age = Faker::Number.between(15, 100)
  location = Faker::Address.city
  avatar = Faker::Avatar.image(name, '100x200', 'png', 'set2')
  bio = Faker::Lorem.paragraph 
  Account.create(name: name, age: age, location: location, avatar: avatar, bio: bio)
end 

puts "20 Accounts Created"