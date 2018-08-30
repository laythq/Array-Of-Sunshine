require 'ruby_model'

# describe 'find_method with one argument' do
  # it 'returns .count(argument) when appropriate' do
  #   expect(find_method([1, 1, 1], 3, 1)).to eq('[1, 1, 1].count(1)')
  # end
  # it 'returns .first(argument), .shift(argument) when appropriate' do
  #   expect(find_method(['a', 'b', 'a'], ['a', 'b'], 2)).to eq("[\"a\", \"b\", \"a\"].first(2), [\"a\", \"b\", \"a\"].shift(2)")
  # end
  # it 'returns .flatten(argument) when appropriate' do
  #   expect(find_method(['a', ['b', [1, 1]]], ['a', 'b', [1, 1]], 1)).to eq("[\"a\", [\"b\", [1, 1]]].flatten(1)")
  # end
  # it 'returns .join(argument) when appropriate' do
  #   expect(find_method(['a', 'b'], 'a, b', ', ')).to include(".join(', ')")
  # end
#   it 'returns .last and .pop(argument) when appropriate' do
#     expect(find_method(['a', 'b', 'c', 'd'], ['c', 'd'], 2)).to include(".last(2)", ".pop(2)")
#   end
#   # it 'returns .product(argument) when appropriate' do
#   #   expect(find_method([1, 2, 3], [[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]], [4, 5])).to eq("[1, 2, 3].product([4, 5])")
#   # end
#   it 'returns .rotate(argument) when appropriate' do
#
#     expect(find_method([1, 2, 3], [3, 1, 2], 2)).to eq(".rotate(2)")
#   end
#   it 'returns .values_at(argument) when appropriate' do
#     expect(find_method(['a', 'b', 'c', 'd', 'e', 'f'], ['d'], 3)).to eq(".values_at(3)")
#   end
# end

describe 'find chained methods' do
  it 'returns .uniq.sort when appropriate' do
    expect(find_method([1,6,5,6,9,9,1,3], [1,3,5,6,9])).to include('.uniq.sort')
  end

  it 'returns .reverse.uniq when appropriate' do
    expect(find_method([5,5,4,3,2,2,1], [1,2,3,4,5])).to include('.reverse.uniq')
  end
end

# describe 'compare_arrays' do
#   it 'returns true if the method called on input equals the desired output' do
#     expect(compare_arrays([1, 2, 3], [3, 2, 1], 'reverse')).to eq true
#   end
#   it 'returns false if the method called on input does not equal the desired output' do
#     expect(compare_arrays([1, 2, 3], [3, 2, 1], 'join')).to eq false
#   end
# end
