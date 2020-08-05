import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("getBorderStyleForDate", () => {
  it("return none when the date is less than 5 days ago", () => {
    const today = Date.now();
    const recentData = new Date(Date.now() - 86400000 * 3);
    const expected = "none";
    const actual = getBorderStyleForDate(recentData, today);
    expect(actual).to.equal(expected);
  });
  it("return the border when the date is more than 5 days ago", () => {});

  const today = Date.now();
  const recentData = new Date(Date.now() - 86400000 * 7);
  const expected = "2px solid red";
  const actual = getBorderStyleForDate(recentData, today);
  expect(actual).to.equal(expected);
});
