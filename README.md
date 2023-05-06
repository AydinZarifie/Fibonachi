# Fibonachi
This Fibonachi algorithm with order complexty O(2**n/2)

The very basic solution that every developer should be able to code, when woke up in the middle of the night:
In this solution, we add two numbers in a loop (a + b) and reassign each item with the next value (a with b, b with c - the result of a + b).

Once the loop reaches the desired index, we return the calculated sum.

You may ask, "Why do we start the loop at 2 instead of 0?".

The answer is simple - because for n equal to 0 or 1, we can return that number, because as we already know - F(0) = 0, F(1) = 1.

The time complexity for this solution is linear - O(n), because we run the loop from 2 to n.

The space complexity is O(1) because it does not matter if we run fibonacci(10) or fibonacci(100), the space required remains the same.
