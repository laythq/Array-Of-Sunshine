def join(x, *args):
    return ''.join(x)

def pop(x, *args):
    x.pop()
    return x

def reverse(x, *args):
    x.reverse()
    return x

def pop_first(x, *args):
    x.pop(0)
    return x

def join_int(x, *args):
    return ''.join(map(str, x))

def append_integer(x, arg1=None, *args):
    x.append(int(arg1))
    return x

def append_string(x, arg1=None, *args):
    x.append(str(arg1))
    return x

def count_integer(x, arg1=None, *args):
    return x.count(int(arg1))

def count_string(x, arg1=None, *args):
    return x.count(str(arg1))

def index_of_string(x, arg1=None, *args):
    return x.index(str(arg1))

def index_of_integer(x, arg1=None, *args):
    return x.index(int(arg1))

def insert_string(x, arg1=None, arg2=None):
    x.insert(arg1, str(arg2))
    return x

def insert_integer(x, arg1=None, arg2=None):
    x.insert(arg1, int(arg2))
    return x

def pop_at_index(x, arg1=None, *args):
    x.pop(arg1)
    return x

def remove_first_string(x, arg1=None, *args):
    x.remove(str(arg1))
    return x

def remove_first_integer(x, arg1=None, *args):
    x.remove(int(arg1))
    return x

methodList = []

methodList.extend((join, pop, reverse, pop_first, join_int, append_integer\
                , append_string, count_integer, count_string, index_of_string\
                , index_of_integer, insert_string, insert_integer\
                , pop_at_index, remove_first_string, remove_first_integer))
