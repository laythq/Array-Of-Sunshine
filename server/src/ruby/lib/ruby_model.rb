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

def compare_arrays(array1, array2, method, tried_arrays)
  result = array1.send(method)
  return true if result == array2 || array1 == array2
  tried_arrays << [method, result]
  return false
rescue StandardError
end

def generate_return_string(solutions, input)
  # # arg = "'#{arg}'" if arg&.is_a?(String)
  # solutions.map! {|method|
  #   # suffix = arg ? "(#{arg})" : ''
  #   "#{input}.#{method.to_s}" #+ suffix
  # }
  solutions.any? ? solutions.join(', ') : 'No method found'
end

def try_all_methods(input, output, solutions, tried_arrays = [], prefix = '')
  return unless input.kind_of?(Array)
  METHOD_LIST.each do |method|
    dummy_input = input.clone
    solutions << "#{prefix}.#{method}" if compare_arrays(dummy_input, output, method, tried_arrays)
  end
end

def find_method(input, output)
  solutions = []
  tried_methods = []
  try_all_methods(input, output, solutions, tried_methods)

  if solutions.empty?
    tried_methods.each do |method, outcome|
      prefix = ".#{method}"
      try_all_methods(outcome, output, solutions, [], prefix)
    end
  end
  # generate_return_string(solutions, input)
  solutions.empty? ? ['No method found'] : solutions
end
