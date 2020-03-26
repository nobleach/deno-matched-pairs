import {
  assertEquals,
} from "./deps.ts";
import {
  MatchedPairs,
} from '../src/MatchedPairs.ts';

Deno.test({
  name: "It outputs true for balanced brackets",
  fn(): void {
    const input = "fun print(arg) { print! }";
    const mp = new MatchedPairs();
    assertEquals(true, mp.isBalanced(input));
  }
});

Deno.test({
  name: "It outputs true for nested brackets",
  fn(): void {
    const input = "({[][]})";
    const mp = new MatchedPairs();
    assertEquals(true, mp.isBalanced(input));
  }
});

Deno.test({
  name: "It outputs false for unbalance brackets",
  fn(): void {
    const input = "({{[)]}})";
    const mp = new MatchedPairs();
    assertEquals(false, mp.isBalanced(input));
  }
});

await Deno.runTests;
