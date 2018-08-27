from find_method import compareArrays, process

from method_list import reverse

def test_process():
    assert compareArrays(['a', 'b'], ['b', 'a'], reverse) == True
    assert process(['a', 'b'], 'ab') == "''.join(['a', 'b'])"
    assert process(['a', 'b'], ['a']) == "['a', 'b'].pop()"
    assert process(['a', 'b'], ['b', 'a']) == "['a', 'b'].reverse()"
    assert process(['a', 'b'], ['b']) == "['a', 'b'].pop(0)"
    assert process([3, 5], '35') == "''.join(map(str, [3, 5]))"
    assert process([1,2,[1,2,3]], [1,2]) == '[1, 2, [1, 2, 3]].pop()'
    assert process([1,2,[1,2,3]], [2, [1,2,3]]) == '[1, 2, [1, 2, 3]].pop(0)'
    assert process([1, 2], 3) == 'No method found.'
    assert process([1,2], [1,2,3], 3) == "[1, 2].append(3)"
    assert process([1,2], [1,2,'a'], 'a') == "[1, 2].append('a')"
    assert process(['a', 'a', 'b'], 2, 'a') == "['a', 'a', 'b'].count('a')"
    assert process([1,1,2], 2, 1) == "[1, 1, 2].count(1)"
    assert process(['a', 'b', 'a'], 0, 'a') == "['a', 'b', 'a'].index('a')"
    assert process([1,2,3], 2, 3) == "[1, 2, 3].index(3)"
    assert process(['a', 'b', 'c'], ['a', 'z', 'b', 'c'], 1, 'z') == "['a', 'b', 'c'].insert(1, 'z')"
    assert process([1,2,3], [1,4,2,3], 1, 4) == "[1, 2, 3].insert(1, 4)"
    assert process(['a', 'b', 'c'], ['a', 'c'], 1) == "['a', 'b', 'c'].pop(1)"
    assert process(['c', 'a', 'b', 'a'], ['c', 'b', 'a'], 'a') == "['c', 'a', 'b', 'a'].remove('a')"
    assert process([5,6,7,'a'], [5,7,'a'], 6) == "[5, 6, 7, 'a'].remove(6)"
