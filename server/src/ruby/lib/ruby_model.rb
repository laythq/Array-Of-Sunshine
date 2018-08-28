METHOD_LIST = %i[
  clear
  compact
  count
  empty?
  first
  flatten
  frozen?
  inspect
  join
  last
  length
  pop
  product
  reverse
  rotate
  shift
  size
  sort
  to_s
  uniq
].freeze

# values_at
# permutation

def compare_arrays(array1, array2, method)
  begin
    if array1.send(method) == array2
      return true
    else
      return false
    end
  rescue StandardError
  end
end

def ignore_exception

end

def find_method(input, output)
  solution = []
  METHOD_LIST.each do |method|
  dummy_input = input.clone
    if compare_arrays(dummy_input, output, method)
      solution << '.' + method.to_s
    end
end

  if solution.any?
    if solution.length == 1
      return ' ' + solution.pop.to_s
    else
      return solution.each {|x| ' ' + x.to_s}
    end
  else
    return 'No method found'
  end
end
