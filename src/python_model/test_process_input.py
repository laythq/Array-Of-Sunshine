from process_input import processInput, workOutType, workOutArray

def test_processInput():
    """ Tests Process Input """
    assert processInput('["a", 2, True, None, [5]]') == ['a', 2, True, None, [5]]

def test_workOutType():
    assert workOutType("'This is a string'") == "This is a string"
    assert workOutType('"This is a string"') == "This is a string"
    assert workOutType('This is a string') == 'This is a string'
    assert workOutType('2') == 2
    assert workOutType('None') == None
    assert workOutType('True') == True
    assert workOutType('False') == False
    assert workOutType('["a", 2, True, None, [5]]') == ['a', 2, True, None, [5]]
    assert workOutType('["a","b","c"]') == ['a', 'b', 'c']
    assert workOutType('[1,2,3]') == [1, 2, 3]
    assert workOutType('[[1,2],[2,3],[4,5]]') == [[1,2],[2,3],[4,5]]
    assert workOutType("[['a','a'],['b','b'],['c','c']]") == [['a','a'],['b','b'],['c','c']]
    assert workOutType("[['a',2, True],[2.4,False],None]") == [['a',2, True],[2.4,False],None]
    assert workOutType("[['a',2, true],[2.4,false],null]") == "Array contains an invalid object"

def test_workOutArray():
    assert workOutArray("['z',1000002,222,'sdasd']") == ['z', 1000002, 222, 'sdasd']
