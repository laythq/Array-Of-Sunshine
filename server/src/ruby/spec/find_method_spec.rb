require 'ruby_model'

describe 'find_method' do
  it 'returns .clear when appropriate' do
    expect(find_method([1, 2, 3], [])).to include('.clear', '.values_at')
  end
  it 'returns .compact when appropriate' do
    expect(find_method([1, 2, 3, nil], [1, 2, 3])).to include('.compact')
  end
  it 'returns .count when appropriate' do
    expect(find_method([1, 2, 3, nil, 1, 2, 3], 7)).to include('.count', '.length', '.size')
  end
  it 'returns .empty? when appropriate' do
    expect(find_method([], true)).to include('.empty?')
  end
  it 'returns .first when appropriate' do
    expect(find_method([1, 2, 3, nil, 1, 2, 3], 1)).to include('.first','.shift')
  end
  it 'returns .flatten when appropriate' do
    expect(find_method(['1d', ['2d', ['3d']]], ['1d','2d', '3d'])).to include('.flatten')
  end
  it 'returns .frozen? when appropriate' do
    expect(find_method([1, 2, 3].freeze, true)).to include('.frozen?')
  end
  it 'returns .inspect, .to_s when appropriate' do
    expect(find_method([1, 2, 3], "[1, 2, 3]")).to include('.inspect', '.to_s')
  end
  it 'returns .join when appropriate' do
    expect(find_method([1, 2, 3], [3, 2, 1])).to include('.reverse')
  end
  it 'returns .join when required for desiredOutput' do
    expect(find_method([1, 2, 3], "123")).to include('.join')
  end
  it 'returns .last, .pop when appropriate' do
    expect(find_method([1, 2, 3, 3], 3)).to include('.last', '.pop')
  end
  it 'returns .length when appropriate' do
    expect(find_method([1, 2, 3, 3], 4)).to include('.count', '.length', '.size')
  end
  it 'returns .pop when appropriate' do
    expect(find_method([1, 2, 3, 3], 3)).to include('.last', '.pop')
  end
  it 'returns .product when appropriate' do
    expect(find_method([1, 2, 3], [[1], [2], [3]])).to include('.product')
  end
  it 'returns .reverse, .pop when appropriate' do
    expect(find_method([1, 2, 3], [3, 2, 1])).to include('.reverse')
  end
  it 'returns .rotate, .pop when appropriate' do
    expect(find_method([1, 2, 3], [2, 3, 1])).to include('.rotate')
  end
  it 'returns .shift, .first when appropriate' do
    expect(find_method([1, 2, 3], 1)).to include('.first', '.shift')
  end
  it 'returns .size, when appropriate' do
    expect(find_method([1, 2, 3, 5], 4)).to include('.count', '.length', '.size')
  end
  it 'returns .compact, .pop, .flatten, .sort, .uniq when appropriate' do
    expect(find_method([1, 2, 3], [1, 2, 3])).to include('.compact', '.flatten', '.sort', '.uniq')
  end
  it 'returns .to_s, when appropriate' do
    expect(find_method([1, 2, 3, 5], "[1, 2, 3, 5]")).to include('.inspect', '.to_s')
  end
  it 'returns .uniq, when appropriate' do
    expect(find_method([1, 1, 2, 2, 2], [1, 2])).to include('.uniq')
  end
  it 'returns \'No method found\' if it is unable to find a method' do
    expect(find_method([1,2,3], [2342, 534534, 65464654])).to include 'No method found'
  end

describe 'find_method with one argument' do
end

# describe 'compare_arrays' do
#   it 'returns true if the method called on input equals the desired output' do
#     expect(compare_arrays([1, 2, 3], [3, 2, 1], 'reverse')).to eq true
#   end
#   it 'returns false if the method called on input does not equal the desired output' do
#     expect(compare_arrays([1, 2, 3], [3, 2, 1], 'join')).to eq false
#   end
# end
end
