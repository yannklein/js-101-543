puts 'Hello world!'

name = "adrIAna"

# p name

## Strings

# Concatenation
full_name_concat = name + " Ito"
# p full_name_concat

# Interpolation
full_name_interp = "#{name} Ito interpolated"
# p full_name_interp

# p name[0]
# p name.length

# p name.upcase
# p name.downcase
# p name.capitalize

monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov Dec";

# p monthString.split(",")

students = ["Anthony", "Andrew", "Ryu"]

students.each do |student|
  # p "#{student} is amazing!"
end

age = 14

if age == 20
  puts "You can giri giri vote"
elsif age >= 20
  puts "You can vote"
else
  puts "You can't vote"
end


def square(number)
  number * number
end

p square(6)







