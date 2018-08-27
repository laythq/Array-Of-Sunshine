import re
from method_list import methodList

values = ["''.join({})", "{}.pop()", "{}.reverse()", "{}.pop(0)", "''.join(map(str, {}))"\
        , "{}.append({})", "{}.append('{}')", "{}.count({})", "{}.count('{}')", "{}.index('{}')"\
        , "{}.index({})", "{}.insert({}, '{}')", "{}.insert({}, {})", "{}.pop({})", "{}.remove('{}')"\
        , "{}.remove({})"]

dictionary = {}

dictionary = {k:v for k, v in zip(methodList, values)}

def compareArrays(input, output, method, arg1 = None, arg2 = None):
    copy = input[:]
    if method(copy, arg1, arg2) == output:
        return True

def findMethod(inp, outp, arg1, arg2):
    for x in methodList:
        try:
            if compareArrays(inp, outp, x, arg1, arg2):
                return dictionary[x].format(inp, arg1, arg2)
        # passing arrays of integers to functions like .one raises a TypeError
        # try/except suppresses those errors and continues the loop.
        except:
            pass

def process(inp, outp, arg1 = None, arg2 = None):
    if findMethod(inp, outp, arg1, arg2) == None:
        return 'No method found.'
    else:
        return findMethod(inp, outp, arg1, arg2)
