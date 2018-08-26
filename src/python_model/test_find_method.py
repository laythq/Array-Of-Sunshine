from find_method import join, pop, reverse, pop_first, \
                        join_int, methodList, compareArrays, process


def test_methods():
    assert join(['a', 'b']) == 'ab'
    assert pop([1, 2]) == [1]
    assert reverse(['a', 'b', 'c']) == ['c', 'b', 'a']
    assert pop_first(['a', 'b', 'c']) == ['b', 'c']
    # assert five(['a', 'b', 'c'], 1) == ['a', 'c']
    assert join_int([1, 2, 'c']) == '12c'

def test_methodList():
    assert methodList == [join, pop, reverse, pop_first, join_int]

def test_process():
    assert compareArrays(['a', 'b'], ['b', 'a'], reverse) == True
    assert process(['a', 'b'], 'ab') == "''.join(x)"
    assert process(['a', 'b'], ['a']) == "x.pop()"
    assert process(['a', 'b'], ['b', 'a']) == "x.reverse()"
    assert process(['a', 'b'], ['b']) == "x.pop(0)"
    assert process([3, 5], '35') == "''.join(map(str, x))"
    assert process([1,2,[1,2,3]], [1,2]) == 'x.pop()'
    assert process([1,2,[1,2,3]], [2, [1,2,3]]) == 'x.pop(0)'
    assert process([1, 2], 3) == 'No method found.'
