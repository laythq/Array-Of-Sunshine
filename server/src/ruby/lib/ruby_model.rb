ZERO_ARGUMENT_METHODS = %i[
  clear
  compact
  count
  empty?
  first
  flatten
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
].freeze

ONE_ARGUMENT_METHODS = %i[
  count
  concat
  delete
  delete_at
  drop
  fetch
  fill
  first
  flatten
  join
  last
  pop
  product
  push
  rotate
  shift
  slice
  take
  unshift
  values_at
].freeze



def compare_arrays(array1, array2, method, tried_arrays, argument = nil)
  result = (argument ? array1.send(method, argument) : array1.send(method))
  return true if result == array2 || array1 == array2
  tried_arrays << [method, result, argument]
  false
rescue ArgumentError, TypeError, IndexError
  false
end

def test_methods_with_no_arguments(input, output, solutions, tried_arrays = [], prefix = '')
  return unless input.kind_of?(Array)
  ZERO_ARGUMENT_METHODS.each do |method|
    dummy_input = input.clone
    solutions << "#{prefix}.#{method}" if compare_arrays(dummy_input, output, method, tried_arrays)
  end
end


def test_methods_with_one_argument(input, output, solutions, argument_list, tried_arrays = [], prefix = '')
  return unless input.kind_of?(Array)
  ONE_ARGUMENT_METHODS.each do |method|
    argument_list.each do |argument|
      dummy_input = input.clone
      if compare_arrays(dummy_input, output, method, tried_arrays, argument)
        argument = "'#{argument}'" if argument.kind_of?(String)
        solutions << "#{prefix}.#{method}(#{argument})"
      end
    end
  end
end

def find_method(input, output, argument_list = [])
  # argument_list = [1,2,3,4,5,6,7,8]
  solutions = []
  tried_methods = []
  test_methods_with_no_arguments(input, output, solutions, tried_methods)
  test_methods_with_one_argument(input, output, solutions, argument_list, tried_methods)

  if solutions.empty?
    tried_methods.each do |method, outcome, argument|
      prefix = ".#{method}" + (argument ? "(#{argument})" : '')
      test_methods_with_no_arguments(outcome, output, solutions, [], prefix)
      test_methods_with_one_argument(input, output, solutions, argument_list, [], prefix)
    end
  end
  # generate_return_string(solutions, input)
  solutions.empty? ? ['No method found'] : solutions
end
