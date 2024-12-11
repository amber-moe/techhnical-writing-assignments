````markdown
# 技术协作课后作业 - Python的For循环

## 什么是For循环？

在Python中，`for`循环是一种非常实用的控制流语句，用于遍历序列（如列表、元组、字典、集合、字符串等）中的每一个元素，执行一系列操作。它提供了一种简洁且高效的方法来处理迭代任务。

## For循环的基本语法

```python
for variable in iterable:
    # 执行代码块
````

这里，`variable`是循环中的变量，将在每次迭代中被赋予`iterable`中下一个元素的值。

## 示例1：使用range()函数

`range()`函数可以生成一系列数字，常用于`for`循环。

```python
for i in range(5):
    print(i)  # 输出从0到4的数字
```

## 示例2：遍历列表

`for`循环可以用于遍历列表中的每个元素。

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)  # 输出每个水果的名字
```

## 示例3：使用enumerate()函数获取索引和值

`enumerate()`函数可以返回序列的索引和值，常用于需要索引的场合。

```python
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(index, fruit)  # 输出索引和对应的水果名
```

## 示例4：结合条件语句

`for`循环可以与`if`等条件语句结合使用，实现更复杂的逻辑。

```python
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        print(num)  # 输出偶数
```