def letter_case_permutation(s)
  elements = s.chars.map { |c| [c.downcase, c.upcase].uniq }
  
  return [""].product(*elements).map(&:join)
end