# Beginner's Tutorial on for Loop in Python #

## Introduction ##

In Python, a for loop is a control flow statement. It allows you to execute a block of code multiple times. It is used for iterating over a sequence (like a list, tuple, string, or dictionary) or other iterable objects.

## Basic Syntax ##

```Python
for variable in iterable:  
    # code block to be executed
```

- `variable` will take each value from the `iterable` one by one.
- `iterable` is the sequence or iterable object you want to loop over.
- `code block` is the block of code that will be executed for each value in the `iterable`.

## Examples ##

### Example 1:Loop Over a List ###

```Python
fruits = ["apple", "banana", "cherry"] 

    for fruit in fruits:  
        print(fruit)
```

Output:

```Python
apple
banana
cherry
```

### Example 2: Looping Over a Range ###

The `range()` function generates a sequence of numbers

```Python
for i in range(5):  
    print(i)
```

Output:

```Python
0  
1  
2  
3  
4
```
