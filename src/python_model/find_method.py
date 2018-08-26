import re

def join(x):
    return ''.join(x)

def pop(x):
    x.pop()
    return x

def reverse(x):
    x.reverse()
    return x

def pop_first(x):
    x.pop(0)
    return x

def join_int(x):
    return ''.join(map(str, x))

methodList = []
dictionary = {}

methodList.extend((join, pop, reverse, pop_first, join_int))
values = ["''.join(x)", "x.pop()", "x.reverse()", "x.pop(0)", "''.join(map(str, x))"]
dictionary = {k:v for k, v in zip(methodList, values)}

def compareArrays(input, output, method):
    copy = input[:]
    if method(copy) == output:
        return True

def findMethod(inp, outp):
    for x in methodList:
        try:
            if compareArrays(inp, outp, x):
                return dictionary[x]
        # passing arrays of integers to functions like .one raises a TypeError
        # try/except suppresses those errors and continues the loop.
        except:
            pass

def process(inp, outp):
    if findMethod(inp, outp) == None:
        return 'No method found.'
    else:
        return findMethod(inp, outp)
