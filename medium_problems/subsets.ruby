def subsets(nums)
  arr = []
  
  for i in (0..nums.length) do 
    arr << nums.combination(i).to_a 
  end 
  
  return arr.flatten(1)
end