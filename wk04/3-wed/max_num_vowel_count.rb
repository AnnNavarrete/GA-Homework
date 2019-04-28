#Homework 17th April 2019

# Question One
def greater (num1, num2)
  if num1 > num2
    puts "#{num1} is greater than #{num2}"
  else 
    puts "#{num2} is greater than #{num1}"
  end
end
greater(5,8)


# Question 2

def signature (word) 
  return word.scan(/[aeiouy]/i).length
end
puts signature("xyz")
