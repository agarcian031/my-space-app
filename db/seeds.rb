# 20.times do
#   name = Faker::Name.name
#   age = Faker::Number.between(15, 100)
#   location = Faker::Address.city
#   avatar = Faker::Avatar.image(name, '100x200', 'png', 'set2')
#   bio = Faker::Lorem.paragraph 
#   Account.create(name: name, age: age, location: location, avatar: avatar, bio: bio)
# end 

# puts "20 Accounts Created"
# set2 - robots 

20.times do
  account = Account.create(
    name: Faker::Name.name, 
    age: Faker::Number.between(15, 100), 
    location: Faker::Address.city,
    avatar: Faker::Avatar.image(Faker::Name.name, '100x200', 'png', 'set5'),
    bio: Faker::Lorem.paragraph
  )
    10.times do 
      Post.create(
        title: Faker::Book.title, 
        body: Faker::Lorem.paragraph_by_chars(256, false), 
        account_id: account.id 
      )
    end 
end 

puts "Accounts and Posts Created "