# Homework: 15th of April 2019
# Exercise: Temperature Converter
# Goal: create a program that can convert a temperature in fahrenheit, Celsius or Kelvin to the other two units.


def convert_temp (starting_temp, temp_unit)
    if temp_unit == "f"
        puts "farenheit: #{starting_temp}"
        puts "Celcius: #{(starting_temp - 32 / 1.8)}"
        puts "Kelvin: #{(starting_temp + 459.67 / 1.8)}"
    elsif temp_unit == "C"
        puts "Celcius: #{(starting_temp)}"
        puts "farenheit: #{(starting_temp * 1.8 + 32)}"
        puts "Kelvin: #{(starting_temp + 273.15)}"
    elsif temp_unit == "K"
        puts "Kelvin: #{(starting_temp)}"
        puts "farenheit #{(starting_temp * 1.8 - 459.67)}"
        puts "Celcius: #{(starting_temp - 273.15)}"
    else
        puts "Please enter an appropriate temperature!"
    end
end

userQuit = "no"

while userQuit != "yes" do
    puts "Enter your starting temp: "    
    starting_temp = gets.chomp.to_i
    puts "Enter your temperature unit: "
    temp_unit = gets.chomp

    convert_temp(starting_temp, temp_unit)

    puts "Do you want to quit, yes or no?"
    userQuit = gets.chomp
end

