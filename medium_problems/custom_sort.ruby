def custom_sort_string(s, t)
     t.chars.sort_by { |c| s.index(c) || t.length }.join
end