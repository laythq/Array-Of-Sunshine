require 'json'
require_relative './ruby/lib/ruby_model.rb'

input = JSON.parse(ARGV[0])[0]
output = JSON.parse(ARGV[0])[1]
args = JSON.parse(ARGV[0])[2]


puts JSON.generate(find_method(input, output, args))
