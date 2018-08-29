require 'json'
require 'pry'

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

input = JSON.parse(ARGV[0])
output = JSON.parse(ARGV[1])

def compare_arrays(array1, array2, method, arg)
  arg ? array1.send(method, arg) == array2 : array1.send(method) == array2
rescue StandardError
end

def generateReturnString(solutions, input, arg)
  arg = "'#{arg}'" if arg&.is_a?(String)
  solutions.map! {|method|
    suffix = arg ? "(#{arg})" : ''
    "#{input}.#{method.to_s}" + suffix
  }
  solutions.any? ? solutions.join(', ') : 'No method found'
end

def find_method(input, output, arg = nil)
  solutions = []
  METHOD_LIST.each do |method|
    dummy_input = input.clone
    solutions << method if compare_arrays(dummy_input, output, method, arg)
  end
  generateReturnString(solutions, input, arg)
end

puts JSON.generate(find_method(input, output))
