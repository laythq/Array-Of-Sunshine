require 'ruby_model'

describe 'find_method' do
  it 'returns .join when required for desiredOutput' do
    expect(find_method([1, 2, 3], [3, 2, 1])).to eq(' .reverse')
  end
  it 'returns .join when required for desiredOutput' do
    expect(find_method([1, 2, 3], "123")).to eq(' .join')
  end
  it 'returns \'no method found\' if it is unable to find a method' do
    expect(find_method([1,2,3], [2342, 534534, 65464654])).to eq 'No method found'
  end
  it 'returns .last, .pop when appropriate' do
    expect(find_method([1, 2, 3, 3], 3)).to eq(['.last', '.pop'])
  end
  it 'returns .reverse, .pop when appropriate' do
    expect(find_method([1, 2, 3], [3, 2, 1])).to eq(' .reverse')
  end
  it 'returns .shift, .pop when appropriate' do
    expect(find_method([1, 2, 3], 1)).to eq(['.first', '.shift'])
  end
  it 'returns .shift, .pop when appropriate' do
    expect(find_method([1, 2, 3], [1, 2, 3])).to eq(['.compact', '.flatten'\
                                                    , '.sort', '.uniq'])
  end
  it 'returns .clear when appropriate' do
    expect(find_method([1, 2, 3], [])).to eq(' .clear')
  end
  it 'returns .compact when appropriate' do
    expect(find_method([1, 2, 3, nil], [1, 2, 3])).to eq(' .compact')
  end
# #
# end
#
# describe 'compare_arrays' do
#   it 'returns true if the method called on input equals the desired output' do
#     expect(compare_arrays([1, 2, 3], [3, 2, 1], 'reverse')).to eq true
#   end
#   it 'returns false if the method called on input does not equal the desired output' do
#     expect(compare_arrays([1, 2, 3], [3, 2, 1], 'join')).to eq false
#   end
# # describe 'verify_array' do
# #   it 'verifies if the input is an array or not' do
# #     expect(verify_array([1,2,3])).to eq True
# #   end
# end
end
