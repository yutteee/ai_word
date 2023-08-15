import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BaseButton } from "../BaseButton";

describe("BaseButton", () => {
  test("labelの時、クリックイベントが発火する", () => {
    const handleClick = jest.fn();
    render(
      <BaseButton labelId="テスト" handleClick={handleClick}>
        テスト
      </BaseButton>
    );
    const button = screen.getByText("テスト");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("buttonの時、クリックイベントが発火する", () => {
    const handleClick = jest.fn();
    render(<BaseButton handleClick={handleClick}>テスト</BaseButton>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
