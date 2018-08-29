from method_list import join, pop, reverse, pop_first, \
                        join_int, methodList, \
                        append_integer, append_string, \
                        count_integer, count_string, index_of_string, \
                        index_of_integer, insert_string, insert_integer, \
                        pop_at_index, remove_first_string, remove_first_integer

def test_methods():
    assert join(['a', 'b']) == 'ab'
    assert pop([1, 2]) == [1]
    assert reverse(['a', 'b', 'c']) == ['c', 'b', 'a']
    assert pop_first(['a', 'b', 'c']) == ['b', 'c']
    assert join_int([1, 2, 'c']) == '12c'
    assert append_integer([10, 11], 12) == [10, 11, 12]
    assert append_string(['one', 'two'], 'three') == ['one', 'two', 'three']
    assert count_integer([2, 2, 2, 3, 4], 2) == 3
    assert count_string(['one', 'one', 'two'], 'one') == 2
    assert index_of_string(['zero', 'one', 'two'], 'one') == 1
    assert index_of_integer([0, 1, 2, 3], 2) == 2
    assert insert_string(['one', 'more'], 3, 'string') == ['one', 'more', 'string']
    assert insert_integer([9, 8, 6], 2, 7) == [9, 8, 7, 6]
    assert pop_at_index(['where', 'to', 'pop'], 2) == ['where', 'to']
    assert remove_first_string(['one', 'one', 'one'], 'one') == ['one', 'one']
    assert remove_first_integer([1, 1, 1, 1], 1) == [1, 1, 1]

def test_methodList():
    assert methodList == [join, pop, reverse, pop_first, join_int\
                        , append_integer, append_string, count_integer\
                        , count_string, index_of_string, index_of_integer\
                        , insert_string, insert_integer, pop_at_index\
                        , remove_first_string, remove_first_integer]
