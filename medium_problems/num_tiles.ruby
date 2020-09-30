def num_tile_possibilities(tiles)
  tiles = tiles.to_s.chars
  
  return nil if tiles.empty?
  
  arr = []

  for i in 1..(tiles.length) do
    arr = arr + tiles.combination(i).to_a
  end 

  x = arr.map.with_index do |sub_array, i|
    sub_array.permutation.to_a
  end 
  
  return x.flatten(1).uniq.length
end