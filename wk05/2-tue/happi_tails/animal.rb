class Animal
  
  def initialize(name, birth_year, gender, species)
    current_year = 2019
    @birth_year = birth_year
    @name = name
    @age = current_year - birth_year
    @gender = gender
    @species = species
  end

  def get_animal_info
    return "I am a #{@age} year old #{@species} named #{@name}"
  end

  def get_animal_name
    return @name
  end
  
end

