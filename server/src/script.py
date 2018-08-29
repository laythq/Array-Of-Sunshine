import sys
import json

import python_model.process_input as process_input
import python_model.find_method as process
import python_model.method_list as methodList

# print(sys.argv[1]))

input = sys.argv[1]
output = sys.argv[2]

sys.stdout.write(process.process(process_input.processInput(input), process_input.processInput(output)))
# sys.stdout.write(process.process(process_input.processInput(input), process_input.processInput(output)))
