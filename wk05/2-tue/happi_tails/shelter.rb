require_relative 'animal.rb'

class Shelter
  # adding all animals
  def initialize()#
    @animals_in_shelter = 
    [
      Animal.new("bruno", 2011, "male", "dog"),
      Animal.new("jaws", 1988, "female", "shark"),
      Animal.new("minnie", 1967, "female", "mouse")
    ]
  end

  # listing all animals currently in shelter
  def list_animals 
    puts "Here are the current animals in shelter: "
    @animals_in_shelter.each do |animal|
      puts animal.get_animal_info
    end
  end

  # adding new animal to shelter
  def add_animal(animal)
    puts "Animal added to shelter: #{animal.get_animal_info}"
    @animals_in_shelter.push(animal)
  end

  # adopting animal from shelter
  def adopt_animal(name)
    @animals_in_shelter.each_with_index do |animal, i|
      if name == animal.get_animal_name
        puts "#{name} has been adopted!"
        @animals_in_shelter.delete_at(i)
      end
    end
  end

end
