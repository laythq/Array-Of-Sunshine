METHOD_LIST = %i[
  clear
  compact
  count
  empty?
  first
  flatten
  frozen?
  hash
  inspect
  join
  last
  length
  permutation
  pop
  product
  reverse
  rotate
  shift
  size
  sort
  to_s
  uniq
  values_at
].freeze

def compare_arrays(array1, array2, method)
  if array1.send(method) == array2
    return true
  else
    return false
  end
end

def find_method(input, output)
possible_methods = []
METHOD_LIST.each do |method|
    dummy = input.clone
    first_pass = dummy.send(method)
    if first_pass.class == Array
      possible_methods << '.' + method.to_s if compare_arrays(input, output, method)
    end
  end

puts 'Possible methods:'
puts(possible_methods.map { |method| ' - ' + method.to_s })
end
