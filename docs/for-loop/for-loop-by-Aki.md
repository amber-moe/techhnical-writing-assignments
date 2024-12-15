# A Beginner's Tutorial on for Loops in Python

## Definition

In Python, a for loop is a control flow statement used for iterating over a sequence (such as a list, tuple, string, or range). It allows you to execute a block of code repeatedly for each element in the sequence.

## Syntax and Basic Structure

The basic syntax of a for loop in Python is for element in iterable: Here, element is a variable that takes on the value of each item in the iterable one at a time. The iterable can be a list, tuple, string, dictionary, set, or any other object that supports iteration. For example, if you have a list my_list = [1, 2, 3], you can use a for loop like this:
   for i in my_list:
       print(i)

## Usage

1. Iterating Over Sequences
2. Iterating over dictionaries

## For example

1. Lists. Lists are one of the most commonly used iterables in Python.

    ```python
    numbers = [1, 2, 3, 4, 5]
    for number in numbers:
        print(number * 2)
    ```

2. Tuples. Tuples are similar to lists, but they are immutable.

    ```python
    coordinates = (10, 20, 30)
    for coord in coordinates:
        print(coord)
    ```

3. Strings. Strings in Python are also iterable, and the iteration occurs in character order.  

    ```python
    message = "Hello"
    for char in message:
        print(char)
    ```

4. Dictionaries. When iterating over a dictionary, you can use a for loop to iterate over the keys of the dictionary.

    ```python
    student_scores = {'Alice': 90, 'Bob': 80, 'Charlie': 70}
    for student in student_scores.keys():
        print(student)
    ```
