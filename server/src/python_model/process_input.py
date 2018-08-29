import re
import ast

def processInput(string):
    # DOES NOT WORK WITH DOUBLE QUOTED ARRAY e.g. '"["a", 2, true, null, [5]]"'
    # need to find the right regex to delete outside quotes only, not inside quotes
    # i.e. those around a
    return workOutType(string)

def workOutType(string):
    if re.match(r"^'.*'$", string):
        result = re.sub(r"[(^')('$)]", '', string)
        return result
    elif re.match(r'^".*"$', string):
        result = re.sub(r'[(^")("$)]', '', string)
        return result
    elif re.match(r'^\d+$', string):
        result = int(string)
        return result
    elif string == 'True':
        return True
    elif string == 'False':
        return False
    elif string == 'None':
        return None
    elif re.match(r'^\[.*]$', string):
        return workOutArray(string)
    else:
        return string

def workOutArray(string):
    for x in string:
        workOutType(x)
        try:
            return ast.literal_eval(string)
        except:
            return "Array contains an invalid object"
    return ast.literal_eval(string)
