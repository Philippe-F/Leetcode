def remove_outer_parentheses(s)
  count = 0
  stack = []
  
  s.each_char do |char|
    stack << char unless char == "(" && count == 0 || count == 1 && char == ")"
    count += 1 if char == "("
    count -= 1 if char == ")"
  end 
  return stack.join 
end