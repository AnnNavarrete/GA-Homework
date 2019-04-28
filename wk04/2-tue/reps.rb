# Homework 16th April 2019

# Round 1

words = ["hello", "what", "is", "up", "dude"]

def lengths (array_of_strings)
  length_of_strings = []
  array_of_strings.each { |n| length_of_strings << n.length }
  length_of_strings
end

p lengths(words)

# Round 2 

def transmogrifier (first_num, second_num, third_num)
  return (first_num * second_num) ** third_num
end

  transmogrifier(5, 4, 3) = 8,000  
  transmogrifier(13, 12, 5) = 92,389,579,776
  transmogrifier(42, 13, 7) = 14,466,001,271,480,793,216 

# Round 3

def toonify (accent, sentence)
  if accent == "daffy"
    return sentence.gsub 's', 'th'
  elsif accent == "elmer"
    return sentence.gsub 'r', 'w'
  else return sentense
  end
end

p toonify("daffy", "so you smell like sausage")

# Round 4

def word_reverse (string)
  return string.split(" ").reverse.join(" ")
end

p word_reverse("Now I know what a TV dinner feels like")

# Round 5

def letter_reverse (string)
  return string.split(" ").map { |string| string.reverse }.join(" ")
end
p letter_reverse("Now I know what a TV dinner feels like")

# Round 6

def longest (array_of_strings)
  return array_of_strings.max_by(&:length)
end
p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])


