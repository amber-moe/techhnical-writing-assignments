# for loops(Java)

The for loop in Java is a control flow statement enabling you to repeatedly execute a block of code based on a given boolean condition. It is frequently used when the number of iterations is known beforehand.

**Here's a general structure of a for loop in Java:**

```Java
for (initialization; termination; increment) {
    // Code to be executed
}
```

***Initialization:*** This is the first part of the for loop and it's executed just once. Usually, it's used to declare and initialize the loop control variables.
***Termination:*** This is the second part of the for loop and it's checked before each round of the loop. If the condition turns out to be true, the loop goes on; if not, the loop stops.
***Increment:*** This is the third part of the for loop and it's executed after each go-round of the loop. It's usually used to update the loop control variable.

*Here's an example of a for loop in Java that prints numbers from 1 to 10:*

```Java
public class ForLoopExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}
```

**In this example:**

1. The initialization part int i = 1 declares and initializes the loop control variable i to 1.
2. The termination part i <= 10 is the condition that is checked before each iteration. The loop continues as long as i is less than or equal to 10.
3. The increment part i++ increments the value of i by 1 after each iteration.
4. The loop will print the numbers 1 through 10, and then the termination condition will fail (since i will be 11), and the loop will end.
