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
  if arg
    arg.each {|x|
      METHOD_LIST.each do |method|
      dummy_input = input.clone
        if compare_arrays(dummy_input, output, method, x)
          solution << method
        end
    end
    }
  else
    METHOD_LIST.each do |method|
    dummy_input = input.clone
      if compare_arrays(dummy_input, output, method, arg)
        solution << method
      end
  end
end
  @input = input
  if solution.any?
    if solution.length == 1
      if arg
        if arg.last.class == String
          return "#{input}." + solution.pop.to_s + "('#{arg.last}')"
        else
          return "#{input}." + solution.pop.to_s + "(#{arg.last})"
        end
      else
        return "#{input}." + solution.pop.to_s
      end
    else
      if arg
        if arg.last.class == String
          return solution.map {|x| "#{input}.#{x}('#{arg.last}')"}.join(', ')
        else
          return solution.map {|x| "#{input}.#{x}(#{arg.last})"}.join(', ')
        end
      else
        return solution.map {|x| "#{input}.#{x}#{arg}"}.join(', ')
      end
    end
  else
    return 'No method found'
  end
end
