require 'ruby_model'

describe 'find_method' do
  it 'returns .clear when appropriate' do
    expect(find_method([1, 2, 3], [])).to eq('[1, 2, 3].clear, [1, 2, 3].values_at')
  end
  it 'returns .compactr when appropriate' do
    expect(find_method([1, 2, 3, nil], [1, 2, 3])).to eq('[1, 2, 3, nil].compact')
  end
  it 'returns .count when appropriate' do
    expect(find_method([1, 2, 3, nil, 1, 2, 3], 7)).to eq('[1, 2, 3, nil, 1, 2, 3].count, [1, 2, 3, nil, 1, 2, 3].length, [1, 2, 3, nil, 1, 2, 3].size')
  end
  it 'returns .empty? when appropriate' do
    expect(find_method([], true)).to eq('[].empty?')
  end
  it 'returns .first when appropriate' do
    expect(find_method([1, 2, 3, nil, 1, 2, 3], 1)).to eq('[1, 2, 3, nil, 1, 2, 3].first, [1, 2, 3, nil, 1, 2, 3].shift')
  end
  it 'returns .flatten when appropriate' do
    expect(find_method(['1d', ['2d', ['3d']]], ['1d','2d', '3d'])).to eq("[\"1d\", [\"2d\", [\"3d\"]]].flatten")
  end
  it 'returns .frozen? when appropriate' do
    expect(find_method([1, 2, 3].freeze, true)).to eq('[1, 2, 3].frozen?')
  end
  it 'returns .inspect, .to_s when appropriate' do
    expect(find_method([1, 2, 3], "[1, 2, 3]")).to eq('[1, 2, 3].inspect, [1, 2, 3].to_s')
  end
  it 'returns .join when appropriate' do
    expect(find_method([1, 2, 3], [3, 2, 1])).to eq('[1, 2, 3].reverse')
  end
  it 'returns .join when required for desiredOutput' do
    expect(find_method([1, 2, 3], "123")).to eq('[1, 2, 3].join')
  end
  it 'returns .last, .pop when appropriate' do
    expect(find_method([1, 2, 3, 3], 3)).to eq('[1, 2, 3, 3].last, [1, 2, 3, 3].pop')
  end
  it 'returns .length when appropriate' do
    expect(find_method([1, 2, 3, 3], 4)).to eq('[1, 2, 3, 3].count, [1, 2, 3, 3].length, [1, 2, 3, 3].size')
  end
  it 'returns .pop when appropriate' do
    expect(find_method([1, 2, 3, 3], 3)).to eq('[1, 2, 3, 3].last, [1, 2, 3, 3].pop')
  end
  it 'returns .product when appropriate' do
    expect(find_method([1, 2, 3], [[1], [2], [3]])).to eq('[1, 2, 3].product')
  end
  it 'returns .reverse, .pop when appropriate' do
    expect(find_method([1, 2, 3], [3, 2, 1])).to eq('[1, 2, 3].reverse')
  end
  it 'returns .rotate, .pop when appropriate' do
    expect(find_method([1, 2, 3], [2, 3, 1])).to eq('[1, 2, 3].rotate')
  end
  it 'returns .shift, .first when appropriate' do
    expect(find_method([1, 2, 3], 1)).to eq('[1, 2, 3].first, [1, 2, 3].shift')
  end
  it 'returns .size, when appropriate' do
    expect(find_method([1, 2, 3, 5], 4)).to eq('[1, 2, 3, 5].count, [1, 2, 3, 5].length, [1, 2, 3, 5].size')
  end
  it 'returns .compact, .pop, .flatten, .sort, .uniq when appropriate' do
    expect(find_method([1, 2, 3], [1, 2, 3])).to eq("[1, 2, 3].compact, [1, 2, 3].flatten, [1, 2, 3].sort, [1, 2, 3].uniq")
  end
  it 'returns .to_s, when appropriate' do
    expect(find_method([1, 2, 3, 5], "[1, 2, 3, 5]")).to eq('[1, 2, 3, 5].inspect, [1, 2, 3, 5].to_s')
  end
  it 'returns .uniq, when appropriate' do
    expect(find_method([1, 1, 2, 2, 2], [1, 2])).to eq('[1, 1, 2, 2, 2].uniq')
  end
  it 'returns \'No method found\' if it is unable to find a method' do
    expect(find_method([1,2,3], [2342, 534534, 65464654])).to eq 'No method found'
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
