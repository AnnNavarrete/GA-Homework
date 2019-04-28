require_relative 'shelter'

shelter = Shelter.new

def new_animal
  puts "What is the name of the animal? "
  name = gets.chomp
  puts "What year is the animal born? "
  birth_year = gets.chomp.to_i
  puts "What is the gender? "
  gender = gets.chomp
  puts "What type of animal is it? "
  species = gets.chomp
  animal = Animal.new(name, birth_year, gender, species)
  return animal
end

puts "welcome to happitails"

user_quit = false

while user_quit != true do
  puts "  1 - show all animals
  2 - add new animal to shelter
  3 - adopt an animal from the shelter
  4 - quit"
  int = gets.chomp.to_i
  if int == 1
    shelter.list_animals()
  elsif int == 2
    animal = new_animal
    shelter.add_animal(animal)
  elsif int == 3
    puts "Enter name of pet to adopt: "
    name = gets.chomp.to_s
    shelter.adopt_animal(name)
  elsif int == 4
    user_quit = true
  else
    "Enter an appropriate number choice please."
  end
end

