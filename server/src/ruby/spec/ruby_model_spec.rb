require 'ruby_model'

# describe 'find_method' do
#   it 'returns .join when required for desiredOutput' do
#     expect(find_method([1, 2, 3], [3, 2, 1])).to include(' .reverse')
#   end
#   it 'returns .join when required for desiredOutput' do
#     expect(find_method([1, 2, 3], "123")).to include(' .join')
#   end
#   it 'returns \'no method found\' if it is unable to find a method' do
#     expect(find_method([1,2,3], [2342, 534534, 65464654])).to include 'No method found'
#   end
# end

describe 'compare_arrays' do
  it 'returns true if the method called on input equals the desired output' do
    expect(compare_arrays([1,2,3], [3,2,1], 'reverse')).to eq true
  end
  it 'returns false if the method called on input does not equal the desired output' do
    expect(compare_arrays([1,2,3], [3,2,1], 'join')).to eq false
  end
end
