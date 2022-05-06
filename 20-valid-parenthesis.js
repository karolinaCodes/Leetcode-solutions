/* Description:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

const isValid = function (s) {
  class Stack {
    constructor() {
      this.data = [];
    }

    push(element) {
      this.data.push(element);
    }

    pop() {
      return this.data.pop();
    }

    peek() {
      return this.data[this.data.length - 1];
    }
  }
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    // ()
    if (s[i] === ')') {
      if (stack.peek() === '(') {
        stack.pop();
        continue;
      } else {
        stack.push(s[i]);
      }
    }

    if (s[i] === '(') {
      stack.push(s[i]);
    }
    // {}
    if (s[i] === '}') {
      if (stack.peek() === '{') {
        stack.pop();
        continue;
      } else {
        stack.push(s[i]);
      }
    }

    if (s[i] === '{') {
      stack.push(s[i]);
    }

    // []
    if (s[i] === ']') {
      if (stack.peek() === '[') {
        stack.pop();
        continue;
      } else {
        stack.push(s[i]);
      }
    }

    if (s[i] === '[') {
      stack.push(s[i]);
    }
  }

  if (stack.peek()) return false;
  return true;
};

console.log(isValid('()'));
console.log(isValid('((())'));
console.log(isValid('()[]]'));

// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('([)]'));
