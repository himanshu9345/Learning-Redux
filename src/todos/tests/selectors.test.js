import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selected", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      {
        text: "say hello",
        isCompleted: true,
      },
      {
        text: "say bye",
        isCompleted: false,
      },
      {
        text: "say night",
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: "say hello",
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
