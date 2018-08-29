require 'json'
require 'pry'


input = JSON.parse(ARGV[0])
output = JSON.parse(ARGV[1])

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

# permutation

def compare_arrays(array1, array2, method, arg)
  begin
  if arg
    if array1.send(method, arg) == array2
      return true
    else
      return false
    end
  else
    if array1.send(method) == array2
      return true
    else
      return false
    end
  end
    rescue StandardError
end
end

def find_method(input, output, arg = nil)
  solution = []
  METHOD_LIST.each do |method|
  dummy_input = input.clone
    if compare_arrays(dummy_input, output, method, arg)
      solution << method
    end
end
  @input = input
  if solution.any?
    if solution.length == 1
      if arg
        if arg.class == String
          return "#{input}." + solution.pop.to_s + "('#{arg}')"
        else
          return "#{input}." + solution.pop.to_s + "(#{arg})"
        end
      else
        puts 'reverse'
        return "#{input}." + solution.pop.to_s
      end
    else
      if arg
        if arg.class == String
          return solution.map {|x| "#{input}.#{x}('#{arg}')"}.join(', ')
        else
          return solution.map {|x| "#{input}.#{x}(#{arg})"}.join(', ')
        end
      else
        return solution.map {|x| "#{input}.#{x}#{arg}"}.join(', ')
      end
    end
  else
    return 'No method found'
  end
end

puts JSON.generate(find_method(input, output))
