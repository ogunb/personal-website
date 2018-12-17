export default `
# recursion and call stack

There are a lot of alien words for us non-Computer Science graduates out there. If you are like me, chances are you were intimidated by how mouthful they are. In this blog post, we’ll cover Recursion, and strip that f\*cker to it’s simplest form.

_Note that you can find the sources utilized in this blog post at the bottom of the page. It’s always better to have unfiltered information, so go check them out too if you like._

Recursion, what the f\*ck is that even mean? Is this English? It is basically a function, calling itself. Kind of like a loop — very much like a loop. Well, I never can fully grasp something before I see it:

Ta-da:

\`\`\`javascript
function factorial(num) {
 if (num < 2) return 1
 return num * factorial(num — 1)
};
factorial(5);
\`\`\`

I never liked math that much back in high school. Turns out, I still don’t, and I have no idea when would you want to use a factorial in JS. Anyway, let’s go through this code together to understand what it does.

First, we call the function with a number as an argument (factorial(5)). With this call, we start, what is called a “Call Stack”-…

> “WOWOWOW, DUDE I CAME HERE TO LEARN ABOUT RECURSION, WHAT THE FUCK IS A CALL STACK???”
> _— me._

Well, you probably already know what a Call Stack is, even if you have never heard of it. [MDN explains it really good here.](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) Let’s say you have to functions: greeting() and sayHi().

\`\`\`javascript
function greeting() {
 return sayHi();
}
function sayHi() {
 return “Hi!”;
}
greeting()
\`\`\`

When you invoke the greeting function, It will be pushed to a stack behind the scenes.

> [ greeting ]

Then this greeting function is going to run through and hit another function, and it’s going to call that function, which will be put on to the stack.

> [ sayHi ]
>
> [ greeting ]

For greeting to resolve and return something, it first has the wait for the sayHi function to resolve. So Call Stack has the golden rule of “First in, Last out”, like any other stack. Basically, it means when there are no more function calls, it’s going to start to resolve them at the top of the stack, meaning, the last one. Hopefully, I draw a picture of Call Stack in your mind. If not, I’ll leave links to great resources at the end of this topic.

> “You’ve wasted my time with something I already know, thanks. What the f\*ck am supposed to do with this knowledge???”
> _-again, me?_

_Now, where were we?_ Yes: First, we call the function with a number as an argument (factorial(5)). With this call, we start, what is called a “Call Stack”.

The second line is the most important part of the recursion. We check whether the given number is less than 2 or not, thus preventing our loop going crazy on us and calling itself infinitely thus crashing our browser.

> **TAKEAWAY: Always have a conditional to break out of the loop.**

If the given number is less then 2, the function will immediately return 1. Else it will continue and return the result of this operation: “num \* factorial(num — 1)”

This might seem confusing at first, so let’s go through our call stack with factorial(5).

> [ factorial(5) ] → Calls “factorial(4)”
>
> [ factorial(4) ] → Calls “factorial(3)”
>
> [ factorial(3) ] → Calls “factorial(2)”
>
> [ factorial(2) ] → Calls “factorial(1)”
>
> [ factorial(1) ] → Returns “1”

---

> [ factorial(1) ] → Fifth Call: Since it’s less than 2, it resolves itself and pops out of the stack, returning 1.
>
> [ factorial(2) ] → Forth Call: With the resolved “factorial(num — 1)” call, now the “num - factorial(num — 1)” operation is equal to “2 - 1”, thus resolving and returning 2.
>
> [ factorial(3) ] → Third Call: Same thing with this too, “num - factorial(num — 1)” : “3 - 2 = 6”
>
> [ factorial(4) ] → Second Call => 4 - 6 = 24
>
> [ factorial(5) ] → First Call will yield the result of 5 - 24, which is 120.
>
> _see live here: [https://codepen.io/ogunb/pen/jQbGrv](CodePen/ogunb))_

> **TAKEAWAY: Recursions depend on the return statements. You should return something from the functions, otherwise, it’s pointless.**

You’re probably saying: “Everything you’ve said, I could do with basic loops.” Exactly. Recursion is basically a loop. The important thing here, sometimes loops can be confusing to look at and read, and sometimes it can be easier and more readable to write it with recursion. Also recursion is very powerful with _“Lexical Scope”_ Whatever is more readable and easier to implement, choose that. Your future-self and your code maintainers will thank you.`;
