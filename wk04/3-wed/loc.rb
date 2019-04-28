# Homework 17th of April 2019
# Line of code
# write a program loc.rb to count and puts the number of lines of code in a file

# eg. say you have a file data.txt with the following contents

# cat
# dog
# rabbit
# when I run the program, it should prompt for a filename

# $ ruby loc.rb
# $ Enter filename: data.txt
# $ 3 line(s)
# hint
# lookup gets method and the readlines method

print "Enter filename: "

filename = gets.chomp

number_of_line = 0

File.open(filename).each do
  number_of_line += 1
end
print "Enter filename: #{filename} with #{number_of_line} line(s)"




