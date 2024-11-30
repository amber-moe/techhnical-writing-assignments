# Beginner's Tutorial on for Loops in Python

## Understanding for Loops

A for loop in Python is used to iterate over a sequence (like a list, tuple, dictionary, set, or string) or other iterable objects. It runs a block of code for each item in the sequence.

## Basic Syntax

The basic syntax for a for loop in Python is:

```python
for element in iterable:
    # Code block to be executed for each item
```

- Element is the variable that takes the value of the next item in the iterable for each iteration.
- Iterable is the object that you want to iterate over.

## Example: Iterating Over a List

```python
# Define a list of fruits
fruits = ['apple', 'banana', 'cherry']
# Use a for loop to iterate over the list
for fruit in fruits:
    print(fruit)
```

Output:

```python
apple
banana
cherry
```

## Example: Iterating Over a String

```python
# Iterate over each character in a string
for char in "hello":
    print(char)
```

Output:

```python
h
e
l
l
o
```

## Using the range() Function

The range() function makes a sequence of numbers. It is often used with for loops when you need to iterate over a range of numbers.

```python
# Print numbers from 0 to 4
for i in range(5):
    print(i)
```

Output:

```python
0
1
2
3
4
```

## Using range() with a Step

The range() function can take three arguments: start, stop, and step.

```python
# Print even numbers from 0 to 9
for i in range(0, 10, 2):
    print(i)
```

Output:

```python
0
2
4
6
8
```

## Nested for Loops

You can nest one for loop inside another.

```python
# Print a matrix of numbers
for i in range(3):
    for j in range(3):
        print(f"i={i}, j={j}", end=" ")
    print()  # For a new line
```

Output:

```python
i=0, j=0 i=0, j=1 i=0, j=2 
i=1, j=0 i=1, j=1 i=1, j=2 
i=2, j=0 i=2, j=1 i=2, j=2 
```

## Loop Control Statements

- Break: End the loop immediately.
- Continue: Skip the current iteration and continue with the next iteration.

```python
# Skip the number 3 using continue
for num in range(1, 6):
    if num == 3:
        continue
    print(num)
```

Output:

```python
1
2
4
5
```

## Supporting Concepts

- Iterable: An object that can return its members one by one, like lists, strings, and tuples
- Iterator: An object that stands for a stream of data. You can get iterators by calling the iter() function on an iterable.
- Sequence: A type of iterable that allows access to its elements by index, like lists and tuples.
- Loop Control Statements: These are break and continue, which allow more control over the flow of the loop.
