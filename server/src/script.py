import sys
import json

import python_model.process_input as process_input
import python_model.find_method as process
import python_model.method_list as methodList

input = json.loads(sys.argv[1])
output = json.loads(sys.argv[2])
sys.stdout.write(process.process(input,output))
