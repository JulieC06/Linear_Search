array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    for value in range( len(array_to_search_through)):
        if value_to_find == array_to_search_through[value]:
            return value

def linear_search_global(value_to_find, array_to_search_through):
    # your code here
    myValue = []
    for value in range( len(array_to_search_through)):
        if value_to_find == array_to_search_through[value]:
            myValue.append(value)
    return myValue

   
