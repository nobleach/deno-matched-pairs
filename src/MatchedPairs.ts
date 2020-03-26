export class MatchedPairs {
  isBalanced(input: string): boolean {
    const stack: Array<string> = [];
    for (let char of input) {
      switch(char) {
        case '[':
        case '(':
        case '{': {
          stack.push(char);
          break;
        }
        case ']': {
          if (stack[stack.length - 1] === '[') {
            stack.pop();
          } else {
            return false;
          }
          break;
        }
        case ')': {
          if (stack[stack.length - 1] === '(') {
            stack.pop();
          } else {
            return false;
          }
          break;
        }
        case '}': {
          if (stack[stack.length - 1] === '{') {
            stack.pop();
          } else {
            return false;
          }
          break;
        }
        default: {
          break;
        }
      }
    }

    return stack.length === 0;
  }
}
