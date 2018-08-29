require 'json'
require_relative './ruby/lib/ruby_model.rb'

input = JSON.parse(ARGV[0])
output = JSON.parse(ARGV[1])

puts JSON.generate(find_method(input, output))
